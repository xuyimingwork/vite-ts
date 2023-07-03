import ts, { factory } from 'typescript'

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
const code = printer.printList(ts.ListFormat.MultiLine, factory.createNodeArray(
  [
    factory.createTypeAliasDeclaration(
      [factory.createToken(ts.SyntaxKind.ExportKeyword)],
      factory.createIdentifier("User"),
      undefined,
      factory.createTypeLiteralNode([
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("name"),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
        ),
        factory.createPropertySignature(
          undefined,
          factory.createIdentifier("age"),
          undefined,
          factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        )
      ])
    )
  ]
), ts.createSourceFile('', '', ts.ScriptTarget.ESNext))

console.log('code', code)