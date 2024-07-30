using clothing_store_backend.Models;
using clothing_store_backend.Repositories.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace clothing_store_backend.Controllers
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

        [HttpGet("{userId}")]
        public async Task<ActionResult<Cart>> GetCart(int userId)
        {
            var cart = await _cartRepository.GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                return NotFound();
            }
            return Ok(cart);
        }

        [HttpPost("{userId}/add/{productId}")]
        public async Task<ActionResult> AddToCart(int userId, int productId, [FromQuery] int quantity = 1)
        {
            await _cartRepository.AddToCartAsync(userId, productId, quantity);
            return Ok();
        }

        [HttpDelete("{userId}/remove/{productId}")]
        public async Task<ActionResult> RemoveFromCart(int userId, int productId)
        {
            await _cartRepository.RemoveFromCartAsync(userId, productId);
            return Ok();
        }

        [HttpPost("{userId}/clear")]
        public async Task<ActionResult> ClearCart(int userId)
        {
            await _cartRepository.ClearCartAsync(userId);
            return Ok();
        }

        [HttpPost("{userId}/update/{productId}")]
        public async Task<ActionResult> UpdateCartItemQuantity(int userId, int productId, [FromQuery] int quantity)
        {
            await _cartRepository.UpdateCartItemQuantityAsync(userId, productId, quantity);
            return Ok();
        }

    }
}
