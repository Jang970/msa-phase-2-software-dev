using clothing_store_backend.Data;
using clothing_store_backend.Models;
using clothing_store_backend.Repositories.Abstract;
using Microsoft.EntityFrameworkCore;

namespace clothing_store_backend.Repositories.Concrete
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(long id)
        {
            return await _context.Users.FindAsync(id);

        }

        public async Task AddUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> UpdateUserAsync(User user)
        {
            var existingUser = await _context.Users.FindAsync(user.Id);
            if (existingUser is null)
            {
                return false;
            }

            existingUser.Username = user.Username;
            existingUser.FirstName = user.FirstName;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task DeleteUserAsync(long id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {

                _context.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<User> GetUserByUsernameAsync(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        }

        public async Task<bool> IsUsernameTakenAsync(string username)
        {
            return await _context.Users.AnyAsync(u => u.Username == username);
        }
    }
}
