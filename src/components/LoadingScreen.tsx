import { motion } from 'framer-motion'

interface Props {
  visible: boolean
}

export default function LoadingScreen({ visible }: Props) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden' }}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: visible ? 'all' : 'none' }}
    >
      <div className="loading-logo">
        <span style={{ color: 'var(--outline)' }}>&lt;</span>
        <span style={{ color: '#fff' }}>MAX</span>
        <span className="text-gradient">DEV</span>
        <span style={{ color: 'var(--outline)' }}>/&gt;</span>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
      <p style={{ marginTop: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
        INITIALIZING SYSTEMS...
      </p>
    </motion.div>
  )
}
