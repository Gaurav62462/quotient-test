import LeftContainer from "./LeftContainer"
import TabsContent from "./TabsContent"

interface MainSectiorProps {
}


const MainSection: React.FC<MainSectiorProps> = () => {

    return (
        <main className="flex-1 p-4 bg-gray-100 dark:bg-field_dark_bg min-h-screen overflow-auto flex flex-col md:flex-row">
        <LeftContainer />
        <div className="w-full md:w-[75%] !rounded-[10px] mt-4 md:mt-0 md:ml-4">
          <TabsContent />
        </div>
      </main>
    )
}

export default MainSection