/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `https://github.com/manzinello/mailgo.js.org/edit/master/website/data/users.json`;
    const showcase = siteConfig.users.map((user) => (
      <a target="_blank" href={user.infoLink} key={user.infoLink}>
        <img
          src={"/img/users/" + user.image}
          alt={user.caption}
          title={user.caption}
        />
        <p>{user.caption}</p>
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={["bottom", "top"]}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is using mailgo?</h1>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you using mailgo?</p>
            <a href={editUrl} className="button">
              Add your company or website
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
