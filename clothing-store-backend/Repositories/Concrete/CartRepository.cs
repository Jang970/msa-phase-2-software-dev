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
        public async Task<Cart> GetCartByUserIdAsync(long userId)
        {
            return await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);
        }

        public async Task<CartItem> AddToCartAsync(long userId, long productId, int quantity)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                cart = new Cart { UserId = userId };
                _context.Carts.Add(cart);
                await _context.SaveChangesAsync();
            }

            var cartItem = await _context.CartItems
                .FirstOrDefaultAsync(ci => ci.CartId == cart.Id && ci.ProductId == productId);
            if (cartItem != null)
            {
                cartItem.Quantity += quantity;
            }
            else
            {
                cartItem = new CartItem
                {
                    CartId = cart.Id,
                    ProductId = productId,
                    Quantity = quantity
                };
                _context.CartItems.Add(cartItem);
            }
            await _context.SaveChangesAsync();

            return cartItem;
        }
          public async Task<CartItem> UpdateCartItemAsync(long userId, long productId, int quantity)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null) return null;

            var cartItem = await _context.CartItems
                .FirstOrDefaultAsync(ci => ci.CartId == cart.Id && ci.ProductId == productId);
            if (cartItem == null) return null;

            cartItem.Quantity = quantity;
            await _context.SaveChangesAsync();

            return cartItem;
        }

        public async Task RemoveFromCartAsync(long userId, long productId)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null) return;

            var cartItem = await _context.CartItems
                .FirstOrDefaultAsync(ci => ci.CartId == cart.Id && ci.ProductId == productId);
            if (cartItem == null) return;

            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();
        }

        public async Task ClearCartAsync(long userId)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null) return;

            _context.CartItems.RemoveRange(cart.CartItems);
            await _context.SaveChangesAsync();
        }
    }
}
