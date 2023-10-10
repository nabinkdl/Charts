
import './App.css'
import { ResponsiveContainer,LineChart, AreaChart ,Line, XAxis, YAxis, CartesianGrid, Legend,Tooltip } from 'recharts'

const pData = [
                {
                  name: 'Nabin',
                  age: '22',
                  height: '9'
                },
                {
                  name: 'Bidur',
                  age: '12',
                  height: '3'
                },
                {
                  name: 'Sumit',
                  age: '16',
                  height: '5'
                },
                {
                  name: 'Kalyan',
                  age: '23',
                  height: '10'
                },
                {
                  name: 'Parbat',
                  age: '19',
                  height: '22'
                },
                {
                  name: 'Sujan',
                  age: '22',
                  height: '14'
                }
]


function App() {


  return (
    <>
      <h1>Line Charts</h1>

      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pData}>
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis dataKey="name"  interval={'preserveStartEnd'}></XAxis>
              <YAxis></YAxis>
              <Tooltip contentStyle={{backgroundColor: 'yellow'}}></Tooltip>
              <Legend></Legend>
              <Line dataKey="age" stroke='green' activeDot={{r:8}}  />
              <Line dataKey="height" stroke='red' type={'monotone'} />
        </LineChart>
      </ResponsiveContainer>

      


      
    </>
  )
}

export default App
