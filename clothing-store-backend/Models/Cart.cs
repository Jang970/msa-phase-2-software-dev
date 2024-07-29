namespace clothing_store_backend.Models
{
    public class Cart
    {
        public long Id { get; set; }
        public required long UserId {get; set;}

        public List<CartItem> CartItems { get; set; } = [];
    }
}
