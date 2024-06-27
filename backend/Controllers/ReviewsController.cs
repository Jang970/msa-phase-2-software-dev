using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewsController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        // GET: api/reviews/{productId}
        [HttpGet("{productId}")]
        public async Task<IActionResult> GetProductReviews(int productId)
        {
            var reviews = await _reviewRepository.GetReviewsByProductIdAsync(productId);
            if (reviews == null)
            {
                return NotFound();
            }

            return Ok(reviews);
        }

        // POST: api/reviews/{productId}
        [HttpPost("{productId}")]
        public async Task<IActionResult> AddReview(int productId, [FromBody] Review review)
        {
            await _reviewRepository.AddReviewAsync(productId, review);
            return Ok(review);
        }
    }
}