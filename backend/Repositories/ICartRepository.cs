using backend.Models;
namespace backend.Repositories
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByUserIdAsync(int userId);
        Task AddCartItemAsync(int userId, CartItem cartItem);
        Task UpdateCartItemAsync(int userId, CartItem cartItem);
        Task DeleteCartItemAsync(int userId, int cartItemId);
    }
}