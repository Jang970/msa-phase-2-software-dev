using clothing_store_backend.Data;
using clothing_store_backend.Models;
using clothing_store_backend.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace clothing_store_backend.Repositories.Concrete
{
    public class CartRepository : ICartRepository
    {
        private readonly DataContext _context;

        public CartRepository(DataContext context) {
        
            _context = context;
        }

        public async Task<Cart> GetCartByUserIdAsync(int userId)
        {
            return await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);
        }

        public async Task AddToCartAsync(int userId, int productId, int quantity)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                cart = new Cart { UserId = userId };
                _context.Carts.Add(cart);
            }

            var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (cartItem != null)
            {
                cartItem.Quantity += quantity;
            }
            else
            {
                cart.CartItems.Add(new CartItem { ProductId = productId, Quantity = quantity, CartId = cart.Id});
            }

            await _context.SaveChangesAsync();
        }

        public async Task RemoveFromCartAsync(int userId, int productId)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);
            if (cart != null)
            {
                var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
                if (cartItem != null)
                {
                    cart.CartItems.Remove(cartItem);
                    await _context.SaveChangesAsync();
                }
            }
        }

        public async Task ClearCartAsync(int userId)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);
            if (cart != null)
            {
                cart.CartItems.Clear();
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateCartItemQuantityAsync(int userId, int productId, int quantity)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);
            if (cart != null)
            {
                var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
                if (cartItem != null)
                {
                    cartItem.Quantity = quantity;
                    await _context.SaveChangesAsync();
                }
            }
        }
    }
}
