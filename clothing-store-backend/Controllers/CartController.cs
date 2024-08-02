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
        public async Task<ActionResult<Cart>> GetCart(long userId)
        {
            var cart = await _cartRepository.GetCartByUserIdAsync(userId);
            if (cart == null)
            {
                return NotFound();
            }

            return Ok(cart);
        }

        [HttpPost("{userId}/add")]
        public async Task<ActionResult<CartItem>> AddToCart(long userId, [FromBody] CartItemDto cartItem)
        {
            var addedItem = await _cartRepository.AddToCartAsync(userId, cartItem.ProductId, cartItem.Quantity);
            return Ok(addedItem);
        }


        [HttpPut("{userId}/update")]
        public async Task<ActionResult<CartItem>> UpdateCartItem(long userId, [FromBody] CartItemDto cartItem)
        {
            var updatedItem = await _cartRepository.UpdateCartItemAsync(userId, cartItem.ProductId, cartItem.Quantity);
            if (updatedItem == null)
            {
                return NotFound();
            }
            return Ok(updatedItem);
        }

        [HttpDelete("{userId}/remove/{productId}")]
        public async Task<IActionResult> RemoveFromCart(long userId, long productId)
        {
            await _cartRepository.RemoveFromCartAsync(userId, productId);
            return NoContent();
        }

        [HttpDelete("{userId}/clear")]
        public async Task<IActionResult> ClearCart(long userId)
        {
            await _cartRepository.ClearCartAsync(userId);
            return NoContent();
        }

    }
}
