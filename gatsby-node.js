/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allWorksJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  );

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // Create pages for each markdown file.
  const workTemplate = path.resolve(`src/templates/work.js`);

  result.data.allWorksJson.edges.forEach(({node}) => {
    console.log(node);
    createPage({
      path: `portfolio/${node.id}`,
      component: workTemplate,
      context: {
        id: node.id
      }
    });
  });
};
