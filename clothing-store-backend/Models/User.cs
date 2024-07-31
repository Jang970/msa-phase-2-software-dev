namespace clothing_store_backend.Models
{
    public class User
    {
        public long Id { get; set; }

        public required string Username { get; set; }
        public required string FirstName { get; set; }
    }
}
