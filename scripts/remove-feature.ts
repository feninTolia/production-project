import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isLoaderEnabled
const featureState = process.argv[3]; // example off/on

if (!removedFeatureName) {
  throw new Error('Enter feature name flag');
}
if (!featureState) {
  throw new Error('Enter feature flag state (on or off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Enter correct feature flag state (on or off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFunction = false;

  node.forEachChild((childNode) => {
    if (
      childNode.isKind(SyntaxKind.Identifier) &&
      childNode.getText() === 'toggleFeatures'
    ) {
      isToggleFunction = true;
    }
  });

  return isToggleFunction;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
      );
      const onFunctionProperty = objectOptions?.getProperty('on');
      const offFunctionProperty = objectOptions?.getProperty('off');
      const featureNameProperty = objectOptions?.getProperty('name');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      );
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction
      );
      const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
