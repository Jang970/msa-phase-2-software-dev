using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public AuthController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (await _userRepository.UserExistsAsync(user.Email))
            {
                return BadRequest("user already exists.");
            }

            await _userRepository.AddUserAsync(user);
            return Ok();
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            // todo: add a login model for email and password for further encapsulation
            var userFromDb = await _userRepository.GetUserByEmailAsync(user.Email);

            if (userFromDb == null || userFromDb.PasswordHash != user.PasswordHash)
            {
                return Unauthorized();
            }

            // todo: generate token (do later if time permits)
            return Ok();
        }
    }

}