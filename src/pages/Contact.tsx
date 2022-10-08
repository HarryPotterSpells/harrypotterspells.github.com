import { AdRow } from "../components/Ads";
import { EXTERNAL_LINKS } from "../Constants";
import { ExternalLink } from "../components/ExternalLink";
import useDocumentTitle from "../utils/useDocumentTitle";

const SpigotLink = () => <ExternalLink url={EXTERNAL_LINKS.SPIGOT}>Spigot resource page</ExternalLink>;
const BukkitLink = () => <ExternalLink url={EXTERNAL_LINKS.BUKKIT}>BukkitDev page</ExternalLink>;
const TrelloLink = () => <ExternalLink url={EXTERNAL_LINKS.TRELLO}>Trello doard</ExternalLink>;
const GitLink = () => <ExternalLink url={EXTERNAL_LINKS.GITHUB}>GitHub repository</ExternalLink>;
const GitIssueLink = () => <ExternalLink url={`${EXTERNAL_LINKS.GITHUB}/issues`}>GitHub issue tracker</ExternalLink>;
const GitIssueTemplateLink = () => (
  <ExternalLink url={`${EXTERNAL_LINKS.GITHUB}/issues/1`}>issue requirements</ExternalLink>
);
const GitFRLink = () => (
  <ExternalLink url={`${EXTERNAL_LINKS.GITHUB}/issues/new?template=feature_request.md`}>
    Github feature request
  </ExternalLink>
);
const GitWebIssueLink = () => (
  <ExternalLink url={`${EXTERNAL_LINKS.GITHUB_WEB}/issues`}>Website issue tracker</ExternalLink>
);

export const Contact = () => {
  useDocumentTitle("Contact");

  return (
    <>
      <h2>Contact</h2>
      <p>
        There are many ways to contact us. If you'd like to leave a nice message for the developers, you can do so by
        using the comments section of the <SpigotLink /> or <BukkitLink />. However, if you have an issue with the
        plugin or website, or want to suggest a feature, please use the appropriate method listed below:
      </p>
      <div className="col-12">
        <h4>Want to help out</h4>
        <p>
          Feel free to submit a Pull Request on our <GitLink />. You could make a pull request of improvements or just
          knock out a few bugs from our <GitIssueLink />. We work on this project in our spare time... For FREE,
          Donations also help out so feel free to click the donation button at the bottom right of the page.
        </p>
        <h4>Want to report a bug?</h4>
        <p>
          We use the <GitIssueLink /> to easily manage bug reports and plugin issues. Simply visit the issue tracker,
          read the <GitIssueTemplateLink />, and then create an issue detailing your problem with the plugin. Be sure to
          supply all the requested information and be ready to give more if asked. One of the developers will take a
          look at it soon and try to help resolve the problem.
        </p>
        <h4>Want to suggest a feature?</h4>
        <p>
          We love feature suggestions! Simply fill out <GitFRLink /> form. Once it is accepted, we will label it with
          "Feature Request" and hopefully provide an estimate to when the request will be added. We'll also add it to
          the <TrelloLink /> and you can vote for the feature to be added.
        </p>
        <h4>Want to report an issue on the site?</h4>
        <p>
          The website is still a work in progress. If you have an issue with the site or find a hole in the
          documentation, please go to <GitWebIssueLink /> and state the issue that you found. We're still working on the
          website and we appreciate any feedback you may have!
        </p>
      </div>

      <AdRow />
    </>
  );
};
