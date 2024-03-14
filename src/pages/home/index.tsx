import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="p-2">
      <h1>Home</h1>
      <Button onClick={() => navigate('/about')}>
        Go to about
      </Button>
    </div>
  )
}
