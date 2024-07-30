using clothing_store_backend.Models;

namespace clothing_store_backend.Repositories.Abstract
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(long id);

        Task AddUserAsync(User user);
        Task<bool> UpdateUserAsync(User user);
        Task DeleteUserAsync(long id);
    }
}
