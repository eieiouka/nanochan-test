function Header() {
  return (
    <header className="header">
      <img
        src="/images/nanoka-icon.png"
        alt="黒部ナノカ"
        className="ema-icon"
      />

      <div className="title-area">
        <h1 className="main-title">
          ナノカちゃんの
          <br className="sp-only" />
          小学校テスト
        </h1>

        <p className="sub-title">
          赤点を取っちゃダメだよ！
        </p>
      </div>
    </header>
  );
}

export default Header;