using clothing_store_backend.Models;
using clothing_store_backend.Repositories.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace clothing_store_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {  _userRepository = userRepository; }

        // GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userRepository.GetAllUsersAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(long id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);

            if (user == null) {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User user)
        {
            var dbUser = await _userRepository.UpdateUserAsync(user);

            return Ok(dbUser);
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            await _userRepository.AddUserAsync(user);

            var newUser = _userRepository.GetUserByIdAsync(user.Id);

            return Ok(newUser);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(long id)
        {
            var user = _userRepository.GetUserByIdAsync(id);
            if (user == null) {
                return NotFound();
            }

            await _userRepository.DeleteUserAsync(id);

            return NoContent();
        }

            
    }
}
