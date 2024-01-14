import Notifications from "./components/Notification"
import datas from "./components/Data.json"

export default function App() {


  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById('mark').innerText = '0'
  }

  return (
    <main className="min-h-screen flex justify-center bg-Very-light-grayish-blue">
      <section className="bg-white flex flex-col h-auto mt-10 p-6 rounded-lg">
        <div className="flex flex-row justify-between">
          <span className="flex flex-row gap-2 text-Very-dark-blue">
            Notifications
            <p className="bg-blue-600 text-white px-1 rounded-sm" id="mark">3</p>
          </span>
          <button className="hover:text-blue-600" onClick={handleClick}>Mark all as read</button>
        </div>
        <div className="flex flex-col mt-5">
          {datas.map((data, index) => {
            return (
              <Notifications
                key={index}
                {...data} />

            )
          }
          )}


        </div>

      </section>
    </main>
  )
}