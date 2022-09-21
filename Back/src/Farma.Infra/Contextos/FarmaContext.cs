using Farma.Domain.models;
using Microsoft.EntityFrameworkCore;

namespace Farma.Infra.Contextos
{
    public class FarmaContext: DbContext
    {
        public FarmaContext(DbContextOptions<FarmaContext> options) : base (options) {}
        public DbSet<Remedio> Remedios { get; set; }
    }
}