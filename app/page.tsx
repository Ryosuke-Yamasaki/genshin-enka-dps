import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

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
    <div className="grid grid-cols-2 gap-4 p-2">
      <div className="rounded-md bg-slate-500 p-2 flex flex-wrap">
        <div className="flex-auto bg-slate-100">name</div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="default">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="rounded-md bg-slate-500 text-center">main</div>
      <div className="rounded-md bg-slate-500">main</div>
      <div className="rounded-md bg-slate-500">main</div>
      <div className="rounded-md bg-slate-500">main</div>
    </div>
  );
};

export default Home;
