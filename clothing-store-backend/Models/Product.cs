using System.ComponentModel.DataAnnotations.Schema;

namespace clothing_store_backend.Models
{
    public class Product
    {
        public long Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required string Category { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public required decimal Price { get; set; }
        public int Views { get; set; }
    }
}
