import SettingsPanel from "./panels/settings"
import NodesPanel from "./panels/nodes"

const Index = () => {
  return (
    <div className='flex' >
       <NodesPanel/>
        <SettingsPanel/>
    </div>
  )
}

export default Index