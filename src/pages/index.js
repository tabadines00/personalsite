import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>It's Thomas</h2>
          <h3>Code, Community, and Culture</h3>
          <p>Full Stack Developer in the Bay Area.</p>
          <Link to="/projects" className={styles.btn}>My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
