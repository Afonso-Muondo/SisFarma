using Farma.API.models;
using Microsoft.EntityFrameworkCore;

namespace Farma.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<Remedio> Remedios { get; set; }
    }
}