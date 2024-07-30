using backend.Models;
using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly ApplicationDBContext _context;

        public CartRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Cart> GetCartByUserIdAsync(int userId)
        {
            return await _context.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Product).FirstOrDefaultAsync(c => c.UserId == userId);
        }

        public async Task AddCartItemAsync(int userId, CartItem cartItem)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                cart = new Cart { UserId = userId };
                _context.Carts.Add(cart);
                await _context.SaveChangesAsync();
            }

            cartItem.CartId = cart.Id;
            _context.CartItems.Add(cartItem);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateCartItemAsync(int userId, CartItem cartItem)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null || cart.Id != cartItem.CartId)
            {
                throw new KeyNotFoundException("Cart not found.");
            }

            _context.Entry(cartItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCartItemAsync(int userId, int cartItemId)
        {
            var cart = await GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                throw new KeyNotFoundException("Cart not found.");
            }

            var cartItem = cart.CartItems.FirstOrDefault(ci => ci.Id == cartItemId);
            if (cartItem != null)
            {
                _context.CartItems.Remove(cartItem);
                await _context.SaveChangesAsync();
            }
        }
    }
}