import AddItemForm from '@/components/add-item-form';
import ButtonGroup from '@/components/button-group';
import Footer from '@/components/footer';
import ItemList from '@/components/item-list';
import Title from '@/components/title';

export default function Home() {
  return (
    <div className="flex flex-col w-full lg:w-3/6 items-center min-h-screen justify-center mx-auto bg-slate-400 gap-10">
      <Title />
      <main className="w-4/6 flex flex-col gap-5">
        <AddItemForm />
        <ItemList />
        <ButtonGroup />
        <Footer />
      </main>
    </div>
  );
}
