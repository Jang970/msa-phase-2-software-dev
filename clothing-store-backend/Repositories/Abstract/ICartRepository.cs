using clothing_store_backend.Models;

namespace clothing_store_backend.Repositories.Abstract
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByUserIdAsync(int userId);
        Task AddToCartAsync(int userId, int productId, int quantity);
        Task RemoveFromCartAsync(int userId, int productId);
        Task ClearCartAsync(int userId);
        Task UpdateCartItemQuantityAsync(int userId, int productId, int quantity);
    }
}
