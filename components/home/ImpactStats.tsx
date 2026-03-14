import { getImpactStats } from '@/sanity/lib/queries'

// Fallback stats shown before Sanity data is added
const fallbackStats = [
  { _id: '1', label: 'Meals Served', value: 10000, suffix: '+', icon: '🍽️', order: 1 },
  { _id: '2', label: 'Beneficiaries Helped', value: 2500, suffix: '+', icon: '👥', order: 2 },
  { _id: '3', label: 'Cities Covered', value: 5, suffix: '+', icon: '🏙️', order: 3 },
  { _id: '4', label: 'Active Volunteers', value: 100, suffix: '+', icon: '🤝', order: 4 },
]

export default async function ImpactStats() {
  const stats = await getImpactStats().catch(() => [])
  const displayStats = stats.length > 0 ? stats : fallbackStats

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayStats.map((stat) => (
            <div key={stat._id} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-green-800">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
