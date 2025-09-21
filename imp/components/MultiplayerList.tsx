import styles from './MultiplayerList.module.scss';

export type MpEntry = {
  name: string;
  startYear: number;
  players: string;
  status: "Sign-In" | "Running" | "Completed";
  href: string;
};

type Props = {
  title: string;
  infoText: string;
  image: string;
  mpList: MpEntry[];
};

export default function MultiplayerList({ title, infoText, image, mpList }: Props) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={image} alt="Game Logo" className={styles.logo} />
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.info}>{infoText}</p>
        </div>
      </header>
      <main>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>MP Name</th>
              <th>Start Year</th>
              <th>Players</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mpList.map(mp => (
              <tr key={mp.name} className={styles.row} onClick={() => window.location.href = mp.href}>
                <td>{mp.name}</td>
                <td>{mp.startYear}</td>
                <td>{mp.players}</td>
                <td>
                  <span className={`${styles.status} ${styles[mp.status.toLowerCase().replace('-', '')]}`}>
                    <span className={styles.statusCircle}></span>
                    {mp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}