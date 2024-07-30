using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        // GET: api/cart/{userId}
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetCart(int userId)
        {
            var cart = await _cartRepository.GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                return NotFound();
            }

            return Ok(cart);
        }

        // POST: api/cart/{userId}/items
        [HttpPost("{userId}/items")]
        public async Task<IActionResult> AddCartItem(int userId, [FromBody] CartItem cartItem)
        {
            await _cartRepository.AddCartItemAsync(userId, cartItem);
            return Ok(cartItem);
        }

        // PUT: api/cart/{userId}/items/{itemId}
        [HttpPut("{userId}/items/{itemId}")]
        public async Task<IActionResult> UpdateCartItem(int userId, int itemId, [FromBody] CartItem cartItem)
        {
            if (itemId != cartItem.Id)
            {
                return BadRequest();
            }

            await _cartRepository.UpdateCartItemAsync(userId, cartItem);
            return Ok(cartItem);
        }

        // DELETE: api/cart/{userId}/items/{itemId}
        [HttpDelete("{userId}/items/{itemId}")]
        public async Task<IActionResult> DeleteCartItem(int userId, int itemId)
        {
            await _cartRepository.DeleteCartItemAsync(userId, itemId);
            return NoContent();
        }
    }
}