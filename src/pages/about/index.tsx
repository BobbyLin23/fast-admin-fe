import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>About</h1>
      <Button onClick={() => navigate('/')}>
        Go to home
      </Button>
    </div>
  )
}
