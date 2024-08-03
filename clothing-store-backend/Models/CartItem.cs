using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace clothing_store_backend.Models
{
    public class CartItem
    {
        public long Id { get; set; }
        public required long CartId { get; set; }
        public required long ProductId { get; set; }
        public required int Quantity { get; set; }

        [ForeignKey("CartId")]
        public Cart? Cart { get; set; }

        [ForeignKey("ProductId")]
        public Product? Product { get; set; }
    }
}
