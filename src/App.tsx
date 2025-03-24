import {
  SchemaBuilder,
  numberPlugin,
  stringPlugin,
  arrayPlugin,
} from "@satoshibits/react-json-schema-builder";
import type { JSONSchema7 } from "json-schema";
import { useMemo, useState } from "react";
import JSONInput from "react-json-editor-ajrm";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import locale from "react-json-editor-ajrm/locale/en";

import "./index.css";
import "@satoshibits/react-json-schema-builder/index.css";
import { createTestSchema, generateSampleData } from "./util";

const Dev = () => {
  const [schema, setSchema] = useState<JSONSchema7>();

  const sampleData = useMemo(() => {
    try {
      return schema ? generateSampleData(schema) : null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [schema]);

  const testSchema = useMemo(() => createTestSchema(), []);

  return (
    <div className=" p-4">
      <h1 className="text-3xl font-extrabold">Try adding a property</h1>
      <div className="mt-6">
        <SchemaBuilder
          initialSchema={testSchema}
          plugins={[numberPlugin, stringPlugin, arrayPlugin]}
          onSchemaChange={(schema) => {
            setSchema(schema);
            console.log("onSchemaChange", schema);
          }}
          onPropertyAddSuccess={(property) => {
            console.log("onPropertyAddSuccess", property);
          }}
        />
        <div className="mt-6">
          <h1 className="text-3xl font-bold">JSON Schema: </h1>
          <JSONInput
            id="json-editor"
            placeholder={schema}
            locale={locale as JSONInput["props"]["locale"]}
            height="100%"
            width="100%"
            onChange={(e: Record<string, unknown>) => console.log(e)}
          />
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold">Sample Data: </h1>
          <JSONInput
            id="json-editor"
            placeholder={sampleData}
            locale={locale as JSONInput["props"]["locale"]}
            height="100%"
            width="100%"
            onChange={(e: Record<string, unknown>) => console.log(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Dev;
