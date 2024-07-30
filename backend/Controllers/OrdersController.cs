using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        // GET: api/orders/{userId}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserOrders(int id)
        {
            var orders = await _orderRepository.GetOrdersByUserIdAsync(id);
            if (orders == null)
            {
                return NotFound();
            }

            return Ok(orders);
        }

        // POST: api/orders
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] Order order)
        {
            await _orderRepository.AddOrderAsync(order);
            return Ok(order);
        }
    }
}