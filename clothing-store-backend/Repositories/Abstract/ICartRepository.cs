using clothing_store_backend.Models;

namespace clothing_store_backend.Repositories.Abstract
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByUserIdAsync(long userId);
        Task<CartItem> AddToCartAsync(long userId, long productId, int quantity);
        Task<CartItem> UpdateCartItemAsync(long userId, long productId, int quantity);
        Task RemoveFromCartAsync(long userId, long productId);
        Task ClearCartAsync(long userId);
    }
}
