export const AdUnit = () => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5558366335634162"
        crossOrigin="anonymous"
      ></script>
      {/* HarryPotterSpells */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5558366335634162"
        data-ad-slot="4436140515"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
};

export const AdRow = () => {
  return (
    <div className="row">
      <div className="col-6">
        <AdUnit />
      </div>
      <div className="col-6">
        <AdUnit />
      </div>
    </div>
  );
};
