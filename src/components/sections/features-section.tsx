import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function TimerAnimation() {
  const [seconds, setSeconds] = useState(15)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev === 0 ? 15 : prev - 1))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        className="font-serif text-6xl md:text-8xl text-foreground"
        key={seconds}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {seconds}
      </motion.span>
      <span className="text-sm text-muted-foreground">минут</span>
    </div>
  )
}

function FamilyAnimation() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev >= 5 ? 1 : prev + 1))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full p-4 flex flex-col items-center justify-center gap-3">
      <div className="flex gap-2 items-end">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary/30 rounded-full"
            style={{ width: i === 0 || i === 1 ? 32 : 24, height: i === 0 || i === 1 ? 48 : 36 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">до {count} чел.</span>
    </div>
  )
}

function EmotionPulse() {
  const emojis = ["😊", "😍", "🥰", "😄", "🤩"]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % emojis.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <motion.span
        key={idx}
        className="text-6xl md:text-7xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {emojis[idx]}
      </motion.span>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что вас ждёт
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Timer Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <TimerAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Всего 15 минут</h3>
              <p className="text-muted-foreground text-sm mt-1">Экспресс-формат — без долгого позирования и усталости.</p>
            </div>
          </motion.div>

          {/* Family Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <FamilyAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Семья до 5 человек</h3>
              <p className="text-muted-foreground text-sm mt-1">Студия, реквизит и тематика — всё уже готово для вас.</p>
            </div>
          </motion.div>

          {/* Emotion Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <EmotionPulse />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Живые эмоции</h3>
              <p className="text-muted-foreground text-sm mt-1">Фотографируем настроение, а не постановку.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}