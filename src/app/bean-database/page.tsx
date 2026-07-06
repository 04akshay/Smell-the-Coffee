import { BeanDatabaseView } from "@/components/bean-database/bean-database-view";
import { beans } from "@/lib/beans";

const [featured, ...rest] = beans;
const secondary = rest.slice(0, 6);
const indexBeans = rest.slice(6);

export default function BeanDatabasePage() {
  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-margin-desktop md:px-margin-desktop">
      <header className="mb-gutter">
        <h1 className="mb-2 font-display-lg-mobile text-display-lg-mobile font-bold text-roasted-espresso md:font-display-lg md:text-display-lg">
          Bean Database
        </h1>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Explore the heritage and flavor of your favorite beans.
        </p>
      </header>

      <BeanDatabaseView featured={featured} secondary={secondary} indexBeans={indexBeans} />
    </main>
  );
}
