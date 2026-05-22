import Link from 'next/link'
import { GraduationCap, Code, Palette, Briefcase } from 'lucide-react'

const userTypes = [
  { icon: GraduationCap, label: 'Students', label_as: 'ছাত্ৰ-ছাত্ৰী', color: '#0078D4', desc: 'AI tools for studying, essays, research', href: '/learnai/ai-for-students' },
  { icon: Code, label: 'Developers', label_as: 'ডেভেলপাৰ', color: '#005A9E', desc: 'Coding assistants and dev tools', href: '/tools?category=coding-ai' },
  { icon: Palette, label: 'Creators', label_as: 'সৃষ্টিশীল', color: '#8764B8', desc: 'Image, video, music AI tools', href: '/tools?category=image-ai' },
  { icon: Briefcase, label: 'Business', label_as: 'ব্যৱসায়', color: '#D83B01', desc: 'Productivity and automation AI', href: '/tools?category=productivity-ai' },
]

export default function UserTypesSection({ lang, dict }) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="section-title">AI for Everyone</h2>
        <p className="text-sm text-text-soft mt-1">Find the best AI tools for your needs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {userTypes.map(u => (
          <Link key={u.label} href={`/${lang}${u.href}`} className="card p-6 flex flex-col items-center gap-3 text-center hover:scale-[1.02] transition-transform group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: u.color + '15' }}>
              <u.icon size={28} style={{ color: u.color }} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
                {lang === 'as' ? u.label_as : u.label}
              </h3>
              <p className="text-xs text-text-soft mt-1">{u.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
