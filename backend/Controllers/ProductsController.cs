using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        // GET: api/products
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productRepository.GetAllProductsAsync();
            return Ok(products);
        }

        // GET: api/products/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _productRepository.GetProductByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // GET: api/products/featured
        [HttpGet("featured")]
        public async Task<IActionResult> GetFeaturedProducts()
        {
            var products = await _productRepository.GetFeaturedProductsAsync();
            return Ok(products);
        }

        // POST: api/products/{id}/view
        [HttpPost("{id}/view")]
        public async Task<IActionResult> IncrementViewCount(int id)
        {
            await _productRepository.IncrementViewCountAsync(id);
            return NoContent();
        }

        // POST: api/products/{id}/rating
        [HttpPost("{id}/rating")]
        public async Task<IActionResult> UpdateAverageRating(int id, [FromBody] int rating)
        {
            await _productRepository.UpdateAverageRatingAsync(id, rating);
            return NoContent();
        }

        // GET: api/products/search
        [HttpGet("search")]
        public async Task<IActionResult> SearchProducts([FromQuery] string query)
        {
            var products = await _productRepository.SearchProductsAsync(query);
            return Ok(products);
        }
    }
}