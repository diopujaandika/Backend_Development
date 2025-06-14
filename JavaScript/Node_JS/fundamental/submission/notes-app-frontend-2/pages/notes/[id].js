import Head from 'next/head';
import React, { Component } from 'react';
import Link from 'next/link';
import ContentEditable from 'react-contenteditable';
import Router from 'next/router';
import styles from './Note.module.scss';
import FloatingButton from '../../components/Common/FloatingButton';
import AnnounceBar from '../../components/Common/AnnounceBar';
import { getBaseURL } from '../../lib/utils/storage';
import { convertISODate } from '../../lib/utils/date';
import { fetchWithAuthentication } from '../../lib/utils/fetcher';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      isError: false,
      accessToken: null,
    };
  }

  async componentDidMount() {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      alert('Mohon untuk login dulu.');
      await Router.push('/login');
      return;
    }

    try {
      const { id } = this.props;
      const { data: { note } } = await fetchWithAuthentication(`${getBaseURL()}notes/${id}`);
      this.setState((prevState) => ({ ...prevState, note, accessToken }));
    } catch (error) {
      this.setState((prevState) => ({ ...prevState, isError: true }));
    }
  }

  renderError() {
    return (
      <div>
        <Head>
          <title>Notes - Not Found</title>
        </Head>
        <AnnounceBar />
        <main className={styles.error}>
          <p>Error displaying notes! Make sure you have done with the back-end or correct url.</p>
          <Link href="/">Back to Home</Link>
        </main>
      </div>
    );
  }

  renderSuccess() {
    const { note, accessToken } = this.state;
    const {
      id, title, body, createdAt, updatedAt, tags, username = 'undefined',
    } = note;

    if (!accessToken) {
      return <></>;
    }

    return (
      <div>
        <Head>
          <title>
            Notes -
            {' '}
            {title}
          </title>
        </Head>
        <AnnounceBar host="/" />
        <main className={styles.detail_page}>
          <section className={styles.detail_page__content}>
            <header className={styles.detail_page__header}>
              <h2 className={styles.detail_page__title}>{title}</h2>
              <p className={styles.detail_page__date}>
                {createdAt === updatedAt ? `Created at ${convertISODate(createdAt)}`
                  : `Updated at ${convertISODate(updatedAt)}`}
              </p>
              <p className={styles.detail_page__owned}>
                Owned by
                {' '}
                {username}
              </p>
              <div className={styles.detail_page__tags}>
                {tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
              </div>
            </header>
            <ContentEditable disabled html={body} className={styles.detail_page__body} />
          </section>
          <FloatingButton
            onClickHandler={() => {
              if (window) {
                window.location.href = `/notes/${id}/edit`;
              }
            }}
            text="Edit Note"
            icon="/icon/edit.svg"
          />
        </main>
      </div>
    );
  }

  render() {
    const { isError, note } = this.state;
    if (isError) {
      return this.renderError();
    }

    if (note) {
      return this.renderSuccess();
    }
    return (<div />);
  }
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  return { props: { id } };
}

export default Note;
