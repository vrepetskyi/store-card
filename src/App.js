import styles from './styles.scss'
import Select from './components/molecules/Select'
import Card from './components/organisms/Card'

export default function App() {
  return (
    <div style={{'display': 'flex', 'flex-wrap': 'wrap'}}>
      <Card price='301.88' name='Soho Coat' colors={['#FFFFFF', '#DD7878', '#C31212', '#63903F', '#3D8CAE', '#FBAC5A']} sizes={['XS', 'S', 'M', 'L', 'XL']} available />
      <Card price='218.69' name='Soho Jeans' colors={['#7caac6', '#84beeb', '#425d8c', '#1a224a', '#1c2135', '#313345']} sizes={['XS', 'S', 'M', 'L', 'XL']} available />
      <Card price='301.88' name='Soho Coat' colors={['#FFFFFF', '#DD7878', '#C31212', '#63903F', '#3D8CAE', '#FBAC5A']} sizes={['XS', 'S', 'M', 'L', 'XL']} />
    </div>
  )
}