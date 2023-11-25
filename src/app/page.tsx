import { EnkaClient } from "enka-network-api"
const enka = new EnkaClient({ defaultLanguage: "jp" })

enka.cachedAssetsManager.activateAutoCacheUpdater({
  instant: true, // Run the first update check immediately
  timeout: 60 * 60 * 1000, // 1 hour interval
  onUpdateStart: async () => {
    console.log("Updating Genshin Data...");
  },
  onUpdateEnd: async () => {
    enka.cachedAssetsManager.refreshAllData(); // Refresh memory
    console.log("Updating Completed!");
  }
});

enka.cachedAssetsManager.deactivateAutoCacheUpdater();

const gunyu = enka.getAllCharacters().map(c => {
  console.log(c.name.get());
  return `${c.name.get()}`
})


// メインページ
const Home = () => {
  return (
    <div>
      {gunyu}
    </div>
  )
}

export default Home