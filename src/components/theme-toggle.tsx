import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import useTheme from '@/hooks/use-theme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button variant='outline' size='icon' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  )
}
