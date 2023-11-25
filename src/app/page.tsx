import { EnkaClient } from "enka-network-api";
const enka = new EnkaClient({ defaultLanguage: "jp" });

enka.cachedAssetsManager.activateAutoCacheUpdater({
  instant: true, // Run the first update check immediately
  timeout: 60 * 60 * 1000, // 1 hour interval
  onUpdateStart: async () => {
    console.log("Updating Genshin Data...");
  },
  onUpdateEnd: async () => {
    enka.cachedAssetsManager.refreshAllData(); // Refresh memory
    console.log("Updating Completed!");
  },
});

enka.cachedAssetsManager.deactivateAutoCacheUpdater();

// メインページ
const Home = () => {
  return (
    <div className="columns-2">
      <div className="max-w-[400px] m-auto bg-slate-500">main</div>
    </div>
  );
};

export default Home;
