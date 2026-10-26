// 520 original PL-300-aligned study questions. Verify product-specific behavior against current Microsoft documentation.
export const questions = [
  {
    "id": "prep-001",
    "domain": "Prepare the data",
    "topic": "Append versus merge",
    "type": "single",
    "question": "While working with a retail sales dataset, you need to stack rows from tables with the same column structure. Which Power Query operation should you use?",
    "options": [
      "Merge queries",
      "Append queries",
      "Group By",
      "Pivot columns"
    ],
    "answer": [
      1
    ],
    "explanation": "Append stacks rows from compatible tables. Merge joins columns by matching key values."
  },
  {
    "id": "prep-002",
    "domain": "Prepare the data",
    "topic": "Append versus merge",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. You need to stack rows from tables with the same column structure. Which Power Query operation should you use?",
    "options": [
      "Append queries",
      "Group By",
      "Pivot columns",
      "Merge queries"
    ],
    "answer": [
      0
    ],
    "explanation": "Append stacks rows from compatible tables. Merge joins columns by matching key values."
  },
  {
    "id": "prep-003",
    "domain": "Prepare the data",
    "topic": "Append versus merge",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? You need to stack rows from tables with the same column structure. Which Power Query operation should you use?",
    "options": [
      "Group By",
      "Pivot columns",
      "Merge queries",
      "Append queries"
    ],
    "answer": [
      3
    ],
    "explanation": "Append stacks rows from compatible tables. Merge joins columns by matching key values."
  },
  {
    "id": "prep-004",
    "domain": "Prepare the data",
    "topic": "Append versus merge",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: you need to stack rows from tables with the same column structure. Which Power Query operation should you use?",
    "options": [
      "Pivot columns",
      "Merge queries",
      "Append queries",
      "Group By"
    ],
    "answer": [
      2
    ],
    "explanation": "Append stacks rows from compatible tables. Merge joins columns by matching key values."
  },
  {
    "id": "prep-005",
    "domain": "Prepare the data",
    "topic": "Merge queries",
    "type": "single",
    "question": "While working with a finance reporting dataset, you need to bring a customer segment from a lookup table into a sales query using CustomerID. Which operation fits?",
    "options": [
      "Transpose",
      "Append queries",
      "Merge queries",
      "Fill Down"
    ],
    "answer": [
      2
    ],
    "explanation": "Merge joins queries using one or more matching columns and a selected join kind."
  },
  {
    "id": "prep-006",
    "domain": "Prepare the data",
    "topic": "Merge queries",
    "type": "single",
    "question": "Scenario: A customer analytics model. You need to bring a customer segment from a lookup table into a sales query using CustomerID. Which operation fits?",
    "options": [
      "Append queries",
      "Merge queries",
      "Fill Down",
      "Transpose"
    ],
    "answer": [
      1
    ],
    "explanation": "Merge joins queries using one or more matching columns and a selected join kind."
  },
  {
    "id": "prep-007",
    "domain": "Prepare the data",
    "topic": "Merge queries",
    "type": "single",
    "question": "For a monthly operational extract, which action is most appropriate? You need to bring a customer segment from a lookup table into a sales query using CustomerID. Which operation fits?",
    "options": [
      "Merge queries",
      "Fill Down",
      "Transpose",
      "Append queries"
    ],
    "answer": [
      0
    ],
    "explanation": "Merge joins queries using one or more matching columns and a selected join kind."
  },
  {
    "id": "prep-008",
    "domain": "Prepare the data",
    "topic": "Merge queries",
    "type": "single",
    "question": "A team maintaining a product inventory report asks: you need to bring a customer segment from a lookup table into a sales query using CustomerID. Which operation fits?",
    "options": [
      "Fill Down",
      "Transpose",
      "Append queries",
      "Merge queries"
    ],
    "answer": [
      3
    ],
    "explanation": "Merge joins queries using one or more matching columns and a selected join kind."
  },
  {
    "id": "prep-009",
    "domain": "Prepare the data",
    "topic": "Folder connector",
    "type": "single",
    "question": "While working with a customer analytics model, you receive a monthly CSV file with the same schema and need to combine all files in a folder. What is the most suitable starting point?",
    "options": [
      "A bookmark",
      "A workspace role",
      "The Folder connector and Combine Files",
      "A calculated column"
    ],
    "answer": [
      2
    ],
    "explanation": "The Folder connector can enumerate files and combine files that share a compatible structure."
  },
  {
    "id": "prep-010",
    "domain": "Prepare the data",
    "topic": "Folder connector",
    "type": "single",
    "question": "Scenario: A monthly operational extract. You receive a monthly CSV file with the same schema and need to combine all files in a folder. What is the most suitable starting point?",
    "options": [
      "A workspace role",
      "The Folder connector and Combine Files",
      "A calculated column",
      "A bookmark"
    ],
    "answer": [
      1
    ],
    "explanation": "The Folder connector can enumerate files and combine files that share a compatible structure."
  },
  {
    "id": "prep-011",
    "domain": "Prepare the data",
    "topic": "Folder connector",
    "type": "single",
    "question": "For a product inventory report, which action is most appropriate? You receive a monthly CSV file with the same schema and need to combine all files in a folder. What is the most suitable starting point?",
    "options": [
      "The Folder connector and Combine Files",
      "A calculated column",
      "A bookmark",
      "A workspace role"
    ],
    "answer": [
      0
    ],
    "explanation": "The Folder connector can enumerate files and combine files that share a compatible structure."
  },
  {
    "id": "prep-012",
    "domain": "Prepare the data",
    "topic": "Folder connector",
    "type": "single",
    "question": "A team maintaining a retail sales dataset asks: you receive a monthly CSV file with the same schema and need to combine all files in a folder. What is the most suitable starting point?",
    "options": [
      "A calculated column",
      "A bookmark",
      "A workspace role",
      "The Folder connector and Combine Files"
    ],
    "answer": [
      3
    ],
    "explanation": "The Folder connector can enumerate files and combine files that share a compatible structure."
  },
  {
    "id": "prep-013",
    "domain": "Prepare the data",
    "topic": "Data types",
    "type": "single",
    "question": "While working with a monthly operational extract, a date column is imported as text, so date filters and time calculations behave incorrectly. What should you do first?",
    "options": [
      "Hide the column",
      "Create a bookmark",
      "Change the report theme",
      "Convert it to a valid Date type"
    ],
    "answer": [
      3
    ],
    "explanation": "Correct data types improve transformations, relationships, sorting, and time intelligence."
  },
  {
    "id": "prep-014",
    "domain": "Prepare the data",
    "topic": "Data types",
    "type": "single",
    "question": "Scenario: A product inventory report. A date column is imported as text, so date filters and time calculations behave incorrectly. What should you do first?",
    "options": [
      "Create a bookmark",
      "Change the report theme",
      "Convert it to a valid Date type",
      "Hide the column"
    ],
    "answer": [
      2
    ],
    "explanation": "Correct data types improve transformations, relationships, sorting, and time intelligence."
  },
  {
    "id": "prep-015",
    "domain": "Prepare the data",
    "topic": "Data types",
    "type": "single",
    "question": "For a retail sales dataset, which action is most appropriate? A date column is imported as text, so date filters and time calculations behave incorrectly. What should you do first?",
    "options": [
      "Change the report theme",
      "Convert it to a valid Date type",
      "Hide the column",
      "Create a bookmark"
    ],
    "answer": [
      1
    ],
    "explanation": "Correct data types improve transformations, relationships, sorting, and time intelligence."
  },
  {
    "id": "prep-016",
    "domain": "Prepare the data",
    "topic": "Data types",
    "type": "single",
    "question": "A team maintaining a finance reporting dataset asks: a date column is imported as text, so date filters and time calculations behave incorrectly. What should you do first?",
    "options": [
      "Convert it to a valid Date type",
      "Hide the column",
      "Create a bookmark",
      "Change the report theme"
    ],
    "answer": [
      0
    ],
    "explanation": "Correct data types improve transformations, relationships, sorting, and time intelligence."
  },
  {
    "id": "prep-017",
    "domain": "Prepare the data",
    "topic": "Column profiling",
    "type": "single",
    "question": "While working with a product inventory report, which Power Query feature helps identify empty values, errors, value distribution, and distinct values?",
    "options": [
      "Column quality, distribution, and profile",
      "Performance Analyzer only",
      "RLS roles",
      "Q&A visual"
    ],
    "answer": [
      0
    ],
    "explanation": "Power Query profiling features help detect data quality issues and understand column contents."
  },
  {
    "id": "prep-018",
    "domain": "Prepare the data",
    "topic": "Column profiling",
    "type": "single",
    "question": "Scenario: A retail sales dataset. Which Power Query feature helps identify empty values, errors, value distribution, and distinct values?",
    "options": [
      "Performance Analyzer only",
      "RLS roles",
      "Q&A visual",
      "Column quality, distribution, and profile"
    ],
    "answer": [
      3
    ],
    "explanation": "Power Query profiling features help detect data quality issues and understand column contents."
  },
  {
    "id": "prep-019",
    "domain": "Prepare the data",
    "topic": "Column profiling",
    "type": "single",
    "question": "For a finance reporting dataset, which action is most appropriate? Which Power Query feature helps identify empty values, errors, value distribution, and distinct values?",
    "options": [
      "RLS roles",
      "Q&A visual",
      "Column quality, distribution, and profile",
      "Performance Analyzer only"
    ],
    "answer": [
      2
    ],
    "explanation": "Power Query profiling features help detect data quality issues and understand column contents."
  },
  {
    "id": "prep-020",
    "domain": "Prepare the data",
    "topic": "Column profiling",
    "type": "single",
    "question": "A team maintaining a customer analytics model asks: which Power Query feature helps identify empty values, errors, value distribution, and distinct values?",
    "options": [
      "Q&A visual",
      "Column quality, distribution, and profile",
      "Performance Analyzer only",
      "RLS roles"
    ],
    "answer": [
      1
    ],
    "explanation": "Power Query profiling features help detect data quality issues and understand column contents."
  },
  {
    "id": "prep-021",
    "domain": "Prepare the data",
    "topic": "Remove unused columns",
    "type": "single",
    "question": "While working with a retail sales dataset, a source contains 90 columns but the report needs only 12. What is a strong model-size optimization?",
    "options": [
      "Duplicate the table",
      "Keep every source column for flexibility",
      "Remove unnecessary columns as early as practical",
      "Convert all columns to text"
    ],
    "answer": [
      2
    ],
    "explanation": "Reducing unused columns lowers model size and can improve refresh and query performance."
  },
  {
    "id": "prep-022",
    "domain": "Prepare the data",
    "topic": "Remove unused columns",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. A source contains 90 columns but the report needs only 12. What is a strong model-size optimization?",
    "options": [
      "Keep every source column for flexibility",
      "Remove unnecessary columns as early as practical",
      "Convert all columns to text",
      "Duplicate the table"
    ],
    "answer": [
      1
    ],
    "explanation": "Reducing unused columns lowers model size and can improve refresh and query performance."
  },
  {
    "id": "prep-023",
    "domain": "Prepare the data",
    "topic": "Remove unused columns",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? A source contains 90 columns but the report needs only 12. What is a strong model-size optimization?",
    "options": [
      "Remove unnecessary columns as early as practical",
      "Convert all columns to text",
      "Duplicate the table",
      "Keep every source column for flexibility"
    ],
    "answer": [
      0
    ],
    "explanation": "Reducing unused columns lowers model size and can improve refresh and query performance."
  },
  {
    "id": "prep-024",
    "domain": "Prepare the data",
    "topic": "Remove unused columns",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: a source contains 90 columns but the report needs only 12. What is a strong model-size optimization?",
    "options": [
      "Convert all columns to text",
      "Duplicate the table",
      "Keep every source column for flexibility",
      "Remove unnecessary columns as early as practical"
    ],
    "answer": [
      3
    ],
    "explanation": "Reducing unused columns lowers model size and can improve refresh and query performance."
  },
  {
    "id": "prep-025",
    "domain": "Prepare the data",
    "topic": "Replace errors",
    "type": "single",
    "question": "While working with a finance reporting dataset, a numeric source column contains a few known invalid values. You must preserve the rows and substitute a documented fallback. What should you use?",
    "options": [
      "Disable load for the whole model",
      "Create a report tooltip",
      "Remove all rows",
      "Replace Errors"
    ],
    "answer": [
      3
    ],
    "explanation": "Replace Errors substitutes a specified value while retaining the affected rows; the replacement must be semantically justified."
  },
  {
    "id": "prep-026",
    "domain": "Prepare the data",
    "topic": "Replace errors",
    "type": "single",
    "question": "Scenario: A customer analytics model. A numeric source column contains a few known invalid values. You must preserve the rows and substitute a documented fallback. What should you use?",
    "options": [
      "Create a report tooltip",
      "Remove all rows",
      "Replace Errors",
      "Disable load for the whole model"
    ],
    "answer": [
      2
    ],
    "explanation": "Replace Errors substitutes a specified value while retaining the affected rows; the replacement must be semantically justified."
  },
  {
    "id": "prep-027",
    "domain": "Prepare the data",
    "topic": "Replace errors",
    "type": "single",
    "question": "For a monthly operational extract, which action is most appropriate? A numeric source column contains a few known invalid values. You must preserve the rows and substitute a documented fallback. What should you use?",
    "options": [
      "Remove all rows",
      "Replace Errors",
      "Disable load for the whole model",
      "Create a report tooltip"
    ],
    "answer": [
      1
    ],
    "explanation": "Replace Errors substitutes a specified value while retaining the affected rows; the replacement must be semantically justified."
  },
  {
    "id": "prep-028",
    "domain": "Prepare the data",
    "topic": "Replace errors",
    "type": "single",
    "question": "A team maintaining a product inventory report asks: a numeric source column contains a few known invalid values. You must preserve the rows and substitute a documented fallback. What should you use?",
    "options": [
      "Replace Errors",
      "Disable load for the whole model",
      "Create a report tooltip",
      "Remove all rows"
    ],
    "answer": [
      0
    ],
    "explanation": "Replace Errors substitutes a specified value while retaining the affected rows; the replacement must be semantically justified."
  },
  {
    "id": "prep-029",
    "domain": "Prepare the data",
    "topic": "Null versus zero",
    "type": "single",
    "question": "While working with a customer analytics model, a missing value means 'not reported', not zero. Why should you avoid blindly replacing nulls with 0?",
    "options": [
      "Nulls prevent all refreshes",
      "Zero cannot be numeric",
      "Power BI requires all columns to be filled",
      "It can change business meaning and aggregates"
    ],
    "answer": [
      3
    ],
    "explanation": "Null and zero express different meanings; replacing one with the other can distort analysis."
  },
  {
    "id": "prep-030",
    "domain": "Prepare the data",
    "topic": "Null versus zero",
    "type": "single",
    "question": "Scenario: A monthly operational extract. A missing value means 'not reported', not zero. Why should you avoid blindly replacing nulls with 0?",
    "options": [
      "Zero cannot be numeric",
      "Power BI requires all columns to be filled",
      "It can change business meaning and aggregates",
      "Nulls prevent all refreshes"
    ],
    "answer": [
      2
    ],
    "explanation": "Null and zero express different meanings; replacing one with the other can distort analysis."
  },
  {
    "id": "prep-031",
    "domain": "Prepare the data",
    "topic": "Null versus zero",
    "type": "single",
    "question": "For a product inventory report, which action is most appropriate? A missing value means 'not reported', not zero. Why should you avoid blindly replacing nulls with 0?",
    "options": [
      "Power BI requires all columns to be filled",
      "It can change business meaning and aggregates",
      "Nulls prevent all refreshes",
      "Zero cannot be numeric"
    ],
    "answer": [
      1
    ],
    "explanation": "Null and zero express different meanings; replacing one with the other can distort analysis."
  },
  {
    "id": "prep-032",
    "domain": "Prepare the data",
    "topic": "Null versus zero",
    "type": "single",
    "question": "A team maintaining a retail sales dataset asks: a missing value means 'not reported', not zero. Why should you avoid blindly replacing nulls with 0?",
    "options": [
      "It can change business meaning and aggregates",
      "Nulls prevent all refreshes",
      "Zero cannot be numeric",
      "Power BI requires all columns to be filled"
    ],
    "answer": [
      0
    ],
    "explanation": "Null and zero express different meanings; replacing one with the other can distort analysis."
  },
  {
    "id": "prep-033",
    "domain": "Prepare the data",
    "topic": "Unpivot",
    "type": "single",
    "question": "While working with a monthly operational extract, a table has separate columns for Jan, Feb, and Mar, and you need a Month column and a Value column. Which transformation is appropriate?",
    "options": [
      "Unpivot columns",
      "Append columns",
      "Split by position",
      "Transpose twice"
    ],
    "answer": [
      0
    ],
    "explanation": "Unpivot turns repeated attribute columns into attribute-value rows, making the table more analytical."
  },
  {
    "id": "prep-034",
    "domain": "Prepare the data",
    "topic": "Unpivot",
    "type": "single",
    "question": "Scenario: A product inventory report. A table has separate columns for Jan, Feb, and Mar, and you need a Month column and a Value column. Which transformation is appropriate?",
    "options": [
      "Append columns",
      "Split by position",
      "Transpose twice",
      "Unpivot columns"
    ],
    "answer": [
      3
    ],
    "explanation": "Unpivot turns repeated attribute columns into attribute-value rows, making the table more analytical."
  },
  {
    "id": "prep-035",
    "domain": "Prepare the data",
    "topic": "Unpivot",
    "type": "single",
    "question": "For a retail sales dataset, which action is most appropriate? A table has separate columns for Jan, Feb, and Mar, and you need a Month column and a Value column. Which transformation is appropriate?",
    "options": [
      "Split by position",
      "Transpose twice",
      "Unpivot columns",
      "Append columns"
    ],
    "answer": [
      2
    ],
    "explanation": "Unpivot turns repeated attribute columns into attribute-value rows, making the table more analytical."
  },
  {
    "id": "prep-036",
    "domain": "Prepare the data",
    "topic": "Unpivot",
    "type": "single",
    "question": "A team maintaining a finance reporting dataset asks: a table has separate columns for Jan, Feb, and Mar, and you need a Month column and a Value column. Which transformation is appropriate?",
    "options": [
      "Transpose twice",
      "Unpivot columns",
      "Append columns",
      "Split by position"
    ],
    "answer": [
      1
    ],
    "explanation": "Unpivot turns repeated attribute columns into attribute-value rows, making the table more analytical."
  },
  {
    "id": "prep-037",
    "domain": "Prepare the data",
    "topic": "Group By",
    "type": "single",
    "question": "While working with a product inventory report, you need one row per product category with total revenue and transaction count. Which transformation can aggregate rows?",
    "options": [
      "Replace values",
      "Group By",
      "Fill Right",
      "Use first row as headers"
    ],
    "answer": [
      1
    ],
    "explanation": "Group By groups rows by key columns and calculates aggregates such as sum or count."
  },
  {
    "id": "prep-038",
    "domain": "Prepare the data",
    "topic": "Group By",
    "type": "single",
    "question": "Scenario: A retail sales dataset. You need one row per product category with total revenue and transaction count. Which transformation can aggregate rows?",
    "options": [
      "Group By",
      "Fill Right",
      "Use first row as headers",
      "Replace values"
    ],
    "answer": [
      0
    ],
    "explanation": "Group By groups rows by key columns and calculates aggregates such as sum or count."
  },
  {
    "id": "prep-039",
    "domain": "Prepare the data",
    "topic": "Group By",
    "type": "single",
    "question": "For a finance reporting dataset, which action is most appropriate? You need one row per product category with total revenue and transaction count. Which transformation can aggregate rows?",
    "options": [
      "Fill Right",
      "Use first row as headers",
      "Replace values",
      "Group By"
    ],
    "answer": [
      3
    ],
    "explanation": "Group By groups rows by key columns and calculates aggregates such as sum or count."
  },
  {
    "id": "prep-040",
    "domain": "Prepare the data",
    "topic": "Group By",
    "type": "single",
    "question": "A team maintaining a customer analytics model asks: you need one row per product category with total revenue and transaction count. Which transformation can aggregate rows?",
    "options": [
      "Use first row as headers",
      "Replace values",
      "Group By",
      "Fill Right"
    ],
    "answer": [
      2
    ],
    "explanation": "Group By groups rows by key columns and calculates aggregates such as sum or count."
  },
  {
    "id": "prep-041",
    "domain": "Prepare the data",
    "topic": "Split column",
    "type": "single",
    "question": "While working with a retail sales dataset, a column contains values like 'North-East|Retail'. You need separate Region and Channel fields. What should you use?",
    "options": [
      "Mark as date table",
      "Manage roles",
      "Split Column by delimiter",
      "Append queries"
    ],
    "answer": [
      2
    ],
    "explanation": "Splitting by the pipe delimiter creates separate columns from the compound text value."
  },
  {
    "id": "prep-042",
    "domain": "Prepare the data",
    "topic": "Split column",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. A column contains values like 'North-East|Retail'. You need separate Region and Channel fields. What should you use?",
    "options": [
      "Manage roles",
      "Split Column by delimiter",
      "Append queries",
      "Mark as date table"
    ],
    "answer": [
      1
    ],
    "explanation": "Splitting by the pipe delimiter creates separate columns from the compound text value."
  },
  {
    "id": "prep-043",
    "domain": "Prepare the data",
    "topic": "Split column",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? A column contains values like 'North-East|Retail'. You need separate Region and Channel fields. What should you use?",
    "options": [
      "Split Column by delimiter",
      "Append queries",
      "Mark as date table",
      "Manage roles"
    ],
    "answer": [
      0
    ],
    "explanation": "Splitting by the pipe delimiter creates separate columns from the compound text value."
  },
  {
    "id": "prep-044",
    "domain": "Prepare the data",
    "topic": "Split column",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: a column contains values like 'North-East|Retail'. You need separate Region and Channel fields. What should you use?",
    "options": [
      "Append queries",
      "Mark as date table",
      "Manage roles",
      "Split Column by delimiter"
    ],
    "answer": [
      3
    ],
    "explanation": "Splitting by the pipe delimiter creates separate columns from the compound text value."
  },
  {
    "id": "prep-045",
    "domain": "Prepare the data",
    "topic": "Reference query",
    "type": "single",
    "question": "While working with a finance reporting dataset, several output queries need the same cleaned source steps. What can reduce duplicated transformation logic?",
    "options": [
      "Copy every step into each output",
      "Use a bookmark",
      "Add a calculated measure",
      "Create a reference query from the staging query"
    ],
    "answer": [
      3
    ],
    "explanation": "A reference query reuses the upstream transformation logic; disable load for staging queries when appropriate."
  },
  {
    "id": "prep-046",
    "domain": "Prepare the data",
    "topic": "Reference query",
    "type": "single",
    "question": "Scenario: A customer analytics model. Several output queries need the same cleaned source steps. What can reduce duplicated transformation logic?",
    "options": [
      "Use a bookmark",
      "Add a calculated measure",
      "Create a reference query from the staging query",
      "Copy every step into each output"
    ],
    "answer": [
      2
    ],
    "explanation": "A reference query reuses the upstream transformation logic; disable load for staging queries when appropriate."
  },
  {
    "id": "prep-047",
    "domain": "Prepare the data",
    "topic": "Reference query",
    "type": "single",
    "question": "For a monthly operational extract, which action is most appropriate? Several output queries need the same cleaned source steps. What can reduce duplicated transformation logic?",
    "options": [
      "Add a calculated measure",
      "Create a reference query from the staging query",
      "Copy every step into each output",
      "Use a bookmark"
    ],
    "answer": [
      1
    ],
    "explanation": "A reference query reuses the upstream transformation logic; disable load for staging queries when appropriate."
  },
  {
    "id": "prep-048",
    "domain": "Prepare the data",
    "topic": "Reference query",
    "type": "single",
    "question": "A team maintaining a product inventory report asks: several output queries need the same cleaned source steps. What can reduce duplicated transformation logic?",
    "options": [
      "Create a reference query from the staging query",
      "Copy every step into each output",
      "Use a bookmark",
      "Add a calculated measure"
    ],
    "answer": [
      0
    ],
    "explanation": "A reference query reuses the upstream transformation logic; disable load for staging queries when appropriate."
  },
  {
    "id": "prep-049",
    "domain": "Prepare the data",
    "topic": "Disable load",
    "type": "single",
    "question": "While working with a customer analytics model, a staging query is only used as an input to other queries and should not appear as a model table. What should you do?",
    "options": [
      "Disable load for the staging query",
      "Delete all its steps",
      "Turn on bidirectional filtering",
      "Publish it as an app"
    ],
    "answer": [
      0
    ],
    "explanation": "Disable Load prevents the intermediate query from being loaded into the semantic model while allowing downstream references."
  },
  {
    "id": "prep-050",
    "domain": "Prepare the data",
    "topic": "Disable load",
    "type": "single",
    "question": "Scenario: A monthly operational extract. A staging query is only used as an input to other queries and should not appear as a model table. What should you do?",
    "options": [
      "Delete all its steps",
      "Turn on bidirectional filtering",
      "Publish it as an app",
      "Disable load for the staging query"
    ],
    "answer": [
      3
    ],
    "explanation": "Disable Load prevents the intermediate query from being loaded into the semantic model while allowing downstream references."
  },
  {
    "id": "prep-051",
    "domain": "Prepare the data",
    "topic": "Disable load",
    "type": "single",
    "question": "For a product inventory report, which action is most appropriate? A staging query is only used as an input to other queries and should not appear as a model table. What should you do?",
    "options": [
      "Turn on bidirectional filtering",
      "Publish it as an app",
      "Disable load for the staging query",
      "Delete all its steps"
    ],
    "answer": [
      2
    ],
    "explanation": "Disable Load prevents the intermediate query from being loaded into the semantic model while allowing downstream references."
  },
  {
    "id": "prep-052",
    "domain": "Prepare the data",
    "topic": "Disable load",
    "type": "single",
    "question": "A team maintaining a retail sales dataset asks: a staging query is only used as an input to other queries and should not appear as a model table. What should you do?",
    "options": [
      "Publish it as an app",
      "Disable load for the staging query",
      "Delete all its steps",
      "Turn on bidirectional filtering"
    ],
    "answer": [
      1
    ],
    "explanation": "Disable Load prevents the intermediate query from being loaded into the semantic model while allowing downstream references."
  },
  {
    "id": "prep-053",
    "domain": "Prepare the data",
    "topic": "Query folding",
    "type": "single",
    "question": "While working with a monthly operational extract, why is query folding valuable for a large relational source?",
    "options": [
      "It guarantees zero refresh time",
      "It can push supported transformations to the source system",
      "It encrypts every column automatically",
      "It creates a star schema automatically"
    ],
    "answer": [
      1
    ],
    "explanation": "When folding is supported, the source performs eligible transformations, often reducing transferred data and refresh work."
  },
  {
    "id": "prep-054",
    "domain": "Prepare the data",
    "topic": "Query folding",
    "type": "single",
    "question": "Scenario: A product inventory report. Why is query folding valuable for a large relational source?",
    "options": [
      "It can push supported transformations to the source system",
      "It encrypts every column automatically",
      "It creates a star schema automatically",
      "It guarantees zero refresh time"
    ],
    "answer": [
      0
    ],
    "explanation": "When folding is supported, the source performs eligible transformations, often reducing transferred data and refresh work."
  },
  {
    "id": "prep-055",
    "domain": "Prepare the data",
    "topic": "Query folding",
    "type": "single",
    "question": "For a retail sales dataset, which action is most appropriate? Why is query folding valuable for a large relational source?",
    "options": [
      "It encrypts every column automatically",
      "It creates a star schema automatically",
      "It guarantees zero refresh time",
      "It can push supported transformations to the source system"
    ],
    "answer": [
      3
    ],
    "explanation": "When folding is supported, the source performs eligible transformations, often reducing transferred data and refresh work."
  },
  {
    "id": "prep-056",
    "domain": "Prepare the data",
    "topic": "Query folding",
    "type": "single",
    "question": "A team maintaining a finance reporting dataset asks: why is query folding valuable for a large relational source?",
    "options": [
      "It creates a star schema automatically",
      "It guarantees zero refresh time",
      "It can push supported transformations to the source system",
      "It encrypts every column automatically"
    ],
    "answer": [
      2
    ],
    "explanation": "When folding is supported, the source performs eligible transformations, often reducing transferred data and refresh work."
  },
  {
    "id": "prep-057",
    "domain": "Prepare the data",
    "topic": "Import mode",
    "type": "single",
    "question": "While working with a product inventory report, which statement best describes Import storage mode?",
    "options": [
      "No model data is stored",
      "It only supports Excel files",
      "Data is loaded into the Power BI model and refreshed on a schedule or manually",
      "Every visual always queries the source live"
    ],
    "answer": [
      2
    ],
    "explanation": "Import stores a compressed copy in the model; reports use the in-memory model between refreshes."
  },
  {
    "id": "prep-058",
    "domain": "Prepare the data",
    "topic": "Import mode",
    "type": "single",
    "question": "Scenario: A retail sales dataset. Which statement best describes Import storage mode?",
    "options": [
      "It only supports Excel files",
      "Data is loaded into the Power BI model and refreshed on a schedule or manually",
      "Every visual always queries the source live",
      "No model data is stored"
    ],
    "answer": [
      1
    ],
    "explanation": "Import stores a compressed copy in the model; reports use the in-memory model between refreshes."
  },
  {
    "id": "prep-059",
    "domain": "Prepare the data",
    "topic": "Import mode",
    "type": "single",
    "question": "For a finance reporting dataset, which action is most appropriate? Which statement best describes Import storage mode?",
    "options": [
      "Data is loaded into the Power BI model and refreshed on a schedule or manually",
      "Every visual always queries the source live",
      "No model data is stored",
      "It only supports Excel files"
    ],
    "answer": [
      0
    ],
    "explanation": "Import stores a compressed copy in the model; reports use the in-memory model between refreshes."
  },
  {
    "id": "prep-060",
    "domain": "Prepare the data",
    "topic": "Import mode",
    "type": "single",
    "question": "A team maintaining a customer analytics model asks: which statement best describes Import storage mode?",
    "options": [
      "Every visual always queries the source live",
      "No model data is stored",
      "It only supports Excel files",
      "Data is loaded into the Power BI model and refreshed on a schedule or manually"
    ],
    "answer": [
      3
    ],
    "explanation": "Import stores a compressed copy in the model; reports use the in-memory model between refreshes."
  },
  {
    "id": "prep-061",
    "domain": "Prepare the data",
    "topic": "DirectQuery",
    "type": "single",
    "question": "While working with a retail sales dataset, when using DirectQuery, where are many data queries executed when users interact with visuals?",
    "options": [
      "Only inside Power Query at design time",
      "Only in the browser cache",
      "In the report theme file",
      "Against the underlying data source"
    ],
    "answer": [
      3
    ],
    "explanation": "DirectQuery sends queries to the source, so source performance, network latency, and model design matter."
  },
  {
    "id": "prep-062",
    "domain": "Prepare the data",
    "topic": "DirectQuery",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. When using DirectQuery, where are many data queries executed when users interact with visuals?",
    "options": [
      "Only in the browser cache",
      "In the report theme file",
      "Against the underlying data source",
      "Only inside Power Query at design time"
    ],
    "answer": [
      2
    ],
    "explanation": "DirectQuery sends queries to the source, so source performance, network latency, and model design matter."
  },
  {
    "id": "prep-063",
    "domain": "Prepare the data",
    "topic": "DirectQuery",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? When using DirectQuery, where are many data queries executed when users interact with visuals?",
    "options": [
      "In the report theme file",
      "Against the underlying data source",
      "Only inside Power Query at design time",
      "Only in the browser cache"
    ],
    "answer": [
      1
    ],
    "explanation": "DirectQuery sends queries to the source, so source performance, network latency, and model design matter."
  },
  {
    "id": "prep-064",
    "domain": "Prepare the data",
    "topic": "DirectQuery",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: when using DirectQuery, where are many data queries executed when users interact with visuals?",
    "options": [
      "Against the underlying data source",
      "Only inside Power Query at design time",
      "Only in the browser cache",
      "In the report theme file"
    ],
    "answer": [
      0
    ],
    "explanation": "DirectQuery sends queries to the source, so source performance, network latency, and model design matter."
  },
  {
    "id": "prep-065",
    "domain": "Prepare the data",
    "topic": "Composite model",
    "type": "single",
    "question": "While working with a finance reporting dataset, a model needs imported aggregation tables plus detailed data queried in DirectQuery. Which approach can support this design?",
    "options": [
      "A composite model",
      "A single text column",
      "A bookmark group",
      "A report page tooltip only"
    ],
    "answer": [
      0
    ],
    "explanation": "Composite models can combine storage modes, subject to supported source and relationship constraints."
  },
  {
    "id": "prep-066",
    "domain": "Prepare the data",
    "topic": "Composite model",
    "type": "single",
    "question": "Scenario: A customer analytics model. A model needs imported aggregation tables plus detailed data queried in DirectQuery. Which approach can support this design?",
    "options": [
      "A single text column",
      "A bookmark group",
      "A report page tooltip only",
      "A composite model"
    ],
    "answer": [
      3
    ],
    "explanation": "Composite models can combine storage modes, subject to supported source and relationship constraints."
  },
  {
    "id": "prep-067",
    "domain": "Prepare the data",
    "topic": "Composite model",
    "type": "single",
    "question": "For a monthly operational extract, which action is most appropriate? A model needs imported aggregation tables plus detailed data queried in DirectQuery. Which approach can support this design?",
    "options": [
      "A bookmark group",
      "A report page tooltip only",
      "A composite model",
      "A single text column"
    ],
    "answer": [
      2
    ],
    "explanation": "Composite models can combine storage modes, subject to supported source and relationship constraints."
  },
  {
    "id": "prep-068",
    "domain": "Prepare the data",
    "topic": "Composite model",
    "type": "single",
    "question": "A team maintaining a product inventory report asks: a model needs imported aggregation tables plus detailed data queried in DirectQuery. Which approach can support this design?",
    "options": [
      "A report page tooltip only",
      "A composite model",
      "A single text column",
      "A bookmark group"
    ],
    "answer": [
      1
    ],
    "explanation": "Composite models can combine storage modes, subject to supported source and relationship constraints."
  },
  {
    "id": "prep-069",
    "domain": "Prepare the data",
    "topic": "Incremental refresh",
    "type": "single",
    "question": "While working with a customer analytics model, a large fact table receives new rows daily but historical rows rarely change. What feature can reduce refresh work?",
    "options": [
      "Disable all relationships",
      "Incremental refresh with suitable date parameters and policy",
      "Refresh every visual manually",
      "Convert the fact table to a bookmark"
    ],
    "answer": [
      1
    ],
    "explanation": "Incremental refresh partitions data by a date/time policy so only relevant partitions need refresh after initial processing."
  },
  {
    "id": "prep-070",
    "domain": "Prepare the data",
    "topic": "Incremental refresh",
    "type": "single",
    "question": "Scenario: A monthly operational extract. A large fact table receives new rows daily but historical rows rarely change. What feature can reduce refresh work?",
    "options": [
      "Incremental refresh with suitable date parameters and policy",
      "Refresh every visual manually",
      "Convert the fact table to a bookmark",
      "Disable all relationships"
    ],
    "answer": [
      0
    ],
    "explanation": "Incremental refresh partitions data by a date/time policy so only relevant partitions need refresh after initial processing."
  },
  {
    "id": "prep-071",
    "domain": "Prepare the data",
    "topic": "Incremental refresh",
    "type": "single",
    "question": "For a product inventory report, which action is most appropriate? A large fact table receives new rows daily but historical rows rarely change. What feature can reduce refresh work?",
    "options": [
      "Refresh every visual manually",
      "Convert the fact table to a bookmark",
      "Disable all relationships",
      "Incremental refresh with suitable date parameters and policy"
    ],
    "answer": [
      3
    ],
    "explanation": "Incremental refresh partitions data by a date/time policy so only relevant partitions need refresh after initial processing."
  },
  {
    "id": "prep-072",
    "domain": "Prepare the data",
    "topic": "Incremental refresh",
    "type": "single",
    "question": "A team maintaining a retail sales dataset asks: a large fact table receives new rows daily but historical rows rarely change. What feature can reduce refresh work?",
    "options": [
      "Convert the fact table to a bookmark",
      "Disable all relationships",
      "Incremental refresh with suitable date parameters and policy",
      "Refresh every visual manually"
    ],
    "answer": [
      2
    ],
    "explanation": "Incremental refresh partitions data by a date/time policy so only relevant partitions need refresh after initial processing."
  },
  {
    "id": "prep-073",
    "domain": "Prepare the data",
    "topic": "Parameters",
    "type": "single",
    "question": "While working with a monthly operational extract, you need to let a deployment change a server or database name without editing every query step. What helps?",
    "options": [
      "Conditional formatting",
      "Drillthrough",
      "Power Query parameters",
      "Report bookmarks"
    ],
    "answer": [
      2
    ],
    "explanation": "Parameters centralize values such as server names, paths, and date boundaries."
  },
  {
    "id": "prep-074",
    "domain": "Prepare the data",
    "topic": "Parameters",
    "type": "single",
    "question": "Scenario: A product inventory report. You need to let a deployment change a server or database name without editing every query step. What helps?",
    "options": [
      "Drillthrough",
      "Power Query parameters",
      "Report bookmarks",
      "Conditional formatting"
    ],
    "answer": [
      1
    ],
    "explanation": "Parameters centralize values such as server names, paths, and date boundaries."
  },
  {
    "id": "prep-075",
    "domain": "Prepare the data",
    "topic": "Parameters",
    "type": "single",
    "question": "For a retail sales dataset, which action is most appropriate? You need to let a deployment change a server or database name without editing every query step. What helps?",
    "options": [
      "Power Query parameters",
      "Report bookmarks",
      "Conditional formatting",
      "Drillthrough"
    ],
    "answer": [
      0
    ],
    "explanation": "Parameters centralize values such as server names, paths, and date boundaries."
  },
  {
    "id": "prep-076",
    "domain": "Prepare the data",
    "topic": "Parameters",
    "type": "single",
    "question": "A team maintaining a finance reporting dataset asks: you need to let a deployment change a server or database name without editing every query step. What helps?",
    "options": [
      "Report bookmarks",
      "Conditional formatting",
      "Drillthrough",
      "Power Query parameters"
    ],
    "answer": [
      3
    ],
    "explanation": "Parameters centralize values such as server names, paths, and date boundaries."
  },
  {
    "id": "prep-077",
    "domain": "Prepare the data",
    "topic": "Locale",
    "type": "single",
    "question": "While working with a product inventory report, a CSV date such as 03/04/2026 is interpreted differently across locales. What should you specify when converting it?",
    "options": [
      "A random whole-number type",
      "A hidden column property",
      "A visual interaction",
      "The appropriate locale for the source format"
    ],
    "answer": [
      3
    ],
    "explanation": "Using the correct locale avoids ambiguous day/month interpretation and conversion errors."
  },
  {
    "id": "prep-078",
    "domain": "Prepare the data",
    "topic": "Locale",
    "type": "single",
    "question": "Scenario: A retail sales dataset. A CSV date such as 03/04/2026 is interpreted differently across locales. What should you specify when converting it?",
    "options": [
      "A hidden column property",
      "A visual interaction",
      "The appropriate locale for the source format",
      "A random whole-number type"
    ],
    "answer": [
      2
    ],
    "explanation": "Using the correct locale avoids ambiguous day/month interpretation and conversion errors."
  },
  {
    "id": "prep-079",
    "domain": "Prepare the data",
    "topic": "Locale",
    "type": "single",
    "question": "For a finance reporting dataset, which action is most appropriate? A CSV date such as 03/04/2026 is interpreted differently across locales. What should you specify when converting it?",
    "options": [
      "A visual interaction",
      "The appropriate locale for the source format",
      "A random whole-number type",
      "A hidden column property"
    ],
    "answer": [
      1
    ],
    "explanation": "Using the correct locale avoids ambiguous day/month interpretation and conversion errors."
  },
  {
    "id": "prep-080",
    "domain": "Prepare the data",
    "topic": "Locale",
    "type": "single",
    "question": "A team maintaining a customer analytics model asks: a CSV date such as 03/04/2026 is interpreted differently across locales. What should you specify when converting it?",
    "options": [
      "The appropriate locale for the source format",
      "A random whole-number type",
      "A hidden column property",
      "A visual interaction"
    ],
    "answer": [
      0
    ],
    "explanation": "Using the correct locale avoids ambiguous day/month interpretation and conversion errors."
  },
  {
    "id": "prep-081",
    "domain": "Prepare the data",
    "topic": "Promote headers",
    "type": "single",
    "question": "While working with a retail sales dataset, the first row of a CSV contains field names but is currently loaded as data. What transformation is needed?",
    "options": [
      "Use First Row as Headers",
      "Fill Down",
      "Unpivot",
      "Keep Errors"
    ],
    "answer": [
      0
    ],
    "explanation": "Promoting headers converts the first row into column names."
  },
  {
    "id": "prep-082",
    "domain": "Prepare the data",
    "topic": "Promote headers",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. The first row of a CSV contains field names but is currently loaded as data. What transformation is needed?",
    "options": [
      "Fill Down",
      "Unpivot",
      "Keep Errors",
      "Use First Row as Headers"
    ],
    "answer": [
      3
    ],
    "explanation": "Promoting headers converts the first row into column names."
  },
  {
    "id": "prep-083",
    "domain": "Prepare the data",
    "topic": "Promote headers",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? The first row of a CSV contains field names but is currently loaded as data. What transformation is needed?",
    "options": [
      "Unpivot",
      "Keep Errors",
      "Use First Row as Headers",
      "Fill Down"
    ],
    "answer": [
      2
    ],
    "explanation": "Promoting headers converts the first row into column names."
  },
  {
    "id": "prep-084",
    "domain": "Prepare the data",
    "topic": "Promote headers",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: the first row of a CSV contains field names but is currently loaded as data. What transformation is needed?",
    "options": [
      "Keep Errors",
      "Use First Row as Headers",
      "Fill Down",
      "Unpivot"
    ],
    "answer": [
      1
    ],
    "explanation": "Promoting headers converts the first row into column names."
  },
  {
    "id": "prep-085",
    "domain": "Prepare the data",
    "topic": "Duplicate removal",
    "type": "single",
    "question": "While working with a finance reporting dataset, a dimension must have one row per ProductKey. Which check is essential before creating a one-to-many relationship?",
    "options": [
      "Add a measure to the key",
      "Ensure ProductKey is unique on the dimension side",
      "Sort the table alphabetically",
      "Hide ProductKey"
    ],
    "answer": [
      1
    ],
    "explanation": "The one side of a one-to-many relationship requires unique key values."
  },
  {
    "id": "prep-086",
    "domain": "Prepare the data",
    "topic": "Duplicate removal",
    "type": "single",
    "question": "Scenario: A customer analytics model. A dimension must have one row per ProductKey. Which check is essential before creating a one-to-many relationship?",
    "options": [
      "Ensure ProductKey is unique on the dimension side",
      "Sort the table alphabetically",
      "Hide ProductKey",
      "Add a measure to the key"
    ],
    "answer": [
      0
    ],
    "explanation": "The one side of a one-to-many relationship requires unique key values."
  },
  {
    "id": "prep-087",
    "domain": "Prepare the data",
    "topic": "Duplicate removal",
    "type": "single",
    "question": "For a monthly operational extract, which action is most appropriate? A dimension must have one row per ProductKey. Which check is essential before creating a one-to-many relationship?",
    "options": [
      "Sort the table alphabetically",
      "Hide ProductKey",
      "Add a measure to the key",
      "Ensure ProductKey is unique on the dimension side"
    ],
    "answer": [
      3
    ],
    "explanation": "The one side of a one-to-many relationship requires unique key values."
  },
  {
    "id": "prep-088",
    "domain": "Prepare the data",
    "topic": "Duplicate removal",
    "type": "single",
    "question": "A team maintaining a product inventory report asks: a dimension must have one row per ProductKey. Which check is essential before creating a one-to-many relationship?",
    "options": [
      "Hide ProductKey",
      "Add a measure to the key",
      "Ensure ProductKey is unique on the dimension side",
      "Sort the table alphabetically"
    ],
    "answer": [
      2
    ],
    "explanation": "The one side of a one-to-many relationship requires unique key values."
  },
  {
    "id": "prep-089",
    "domain": "Prepare the data",
    "topic": "Data source credentials",
    "type": "single",
    "question": "While working with a customer analytics model, a published semantic model fails refresh because credentials are missing. Where should the owner investigate first?",
    "options": [
      "The DAX format string",
      "The bookmark pane",
      "Semantic model settings and data source credentials",
      "The report's bar chart colors"
    ],
    "answer": [
      2
    ],
    "explanation": "Credentials and connection settings are configured for the published semantic model, with gateway configuration when needed."
  },
  {
    "id": "prep-090",
    "domain": "Prepare the data",
    "topic": "Data source credentials",
    "type": "single",
    "question": "Scenario: A monthly operational extract. A published semantic model fails refresh because credentials are missing. Where should the owner investigate first?",
    "options": [
      "The bookmark pane",
      "Semantic model settings and data source credentials",
      "The report's bar chart colors",
      "The DAX format string"
    ],
    "answer": [
      1
    ],
    "explanation": "Credentials and connection settings are configured for the published semantic model, with gateway configuration when needed."
  },
  {
    "id": "prep-091",
    "domain": "Prepare the data",
    "topic": "Data source credentials",
    "type": "single",
    "question": "For a product inventory report, which action is most appropriate? A published semantic model fails refresh because credentials are missing. Where should the owner investigate first?",
    "options": [
      "Semantic model settings and data source credentials",
      "The report's bar chart colors",
      "The DAX format string",
      "The bookmark pane"
    ],
    "answer": [
      0
    ],
    "explanation": "Credentials and connection settings are configured for the published semantic model, with gateway configuration when needed."
  },
  {
    "id": "prep-092",
    "domain": "Prepare the data",
    "topic": "Data source credentials",
    "type": "single",
    "question": "A team maintaining a retail sales dataset asks: a published semantic model fails refresh because credentials are missing. Where should the owner investigate first?",
    "options": [
      "The report's bar chart colors",
      "The DAX format string",
      "The bookmark pane",
      "Semantic model settings and data source credentials"
    ],
    "answer": [
      3
    ],
    "explanation": "Credentials and connection settings are configured for the published semantic model, with gateway configuration when needed."
  },
  {
    "id": "prep-093",
    "domain": "Prepare the data",
    "topic": "Privacy levels",
    "type": "single",
    "question": "While working with a monthly operational extract, why should Power Query privacy levels be configured appropriately when combining sources?",
    "options": [
      "They replace all access controls",
      "They determine chart colors",
      "They guarantee the source is accurate",
      "They help govern how data from different sources may be combined"
    ],
    "answer": [
      3
    ],
    "explanation": "Privacy levels help prevent unintended data leakage between sources during mashup evaluation; they are not a substitute for security."
  },
  {
    "id": "prep-094",
    "domain": "Prepare the data",
    "topic": "Privacy levels",
    "type": "single",
    "question": "Scenario: A product inventory report. Why should Power Query privacy levels be configured appropriately when combining sources?",
    "options": [
      "They determine chart colors",
      "They guarantee the source is accurate",
      "They help govern how data from different sources may be combined",
      "They replace all access controls"
    ],
    "answer": [
      2
    ],
    "explanation": "Privacy levels help prevent unintended data leakage between sources during mashup evaluation; they are not a substitute for security."
  },
  {
    "id": "prep-095",
    "domain": "Prepare the data",
    "topic": "Privacy levels",
    "type": "single",
    "question": "For a retail sales dataset, which action is most appropriate? Why should Power Query privacy levels be configured appropriately when combining sources?",
    "options": [
      "They guarantee the source is accurate",
      "They help govern how data from different sources may be combined",
      "They replace all access controls",
      "They determine chart colors"
    ],
    "answer": [
      1
    ],
    "explanation": "Privacy levels help prevent unintended data leakage between sources during mashup evaluation; they are not a substitute for security."
  },
  {
    "id": "prep-096",
    "domain": "Prepare the data",
    "topic": "Privacy levels",
    "type": "single",
    "question": "A team maintaining a finance reporting dataset asks: why should Power Query privacy levels be configured appropriately when combining sources?",
    "options": [
      "They help govern how data from different sources may be combined",
      "They replace all access controls",
      "They determine chart colors",
      "They guarantee the source is accurate"
    ],
    "answer": [
      0
    ],
    "explanation": "Privacy levels help prevent unintended data leakage between sources during mashup evaluation; they are not a substitute for security."
  },
  {
    "id": "prep-097",
    "domain": "Prepare the data",
    "topic": "Dataflows",
    "type": "single",
    "question": "While working with a product inventory report, what is a common reason to use a dataflow?",
    "options": [
      "Reuse prepared data entities across multiple semantic models or reports",
      "Replace all DAX measures",
      "Create report page navigation only",
      "Grant every user admin rights"
    ],
    "answer": [
      0
    ],
    "explanation": "Dataflows centralize reusable data preparation in a service-managed layer, depending on the workspace and capacity setup."
  },
  {
    "id": "prep-098",
    "domain": "Prepare the data",
    "topic": "Dataflows",
    "type": "single",
    "question": "Scenario: A retail sales dataset. What is a common reason to use a dataflow?",
    "options": [
      "Replace all DAX measures",
      "Create report page navigation only",
      "Grant every user admin rights",
      "Reuse prepared data entities across multiple semantic models or reports"
    ],
    "answer": [
      3
    ],
    "explanation": "Dataflows centralize reusable data preparation in a service-managed layer, depending on the workspace and capacity setup."
  },
  {
    "id": "prep-099",
    "domain": "Prepare the data",
    "topic": "Dataflows",
    "type": "single",
    "question": "For a finance reporting dataset, which action is most appropriate? What is a common reason to use a dataflow?",
    "options": [
      "Create report page navigation only",
      "Grant every user admin rights",
      "Reuse prepared data entities across multiple semantic models or reports",
      "Replace all DAX measures"
    ],
    "answer": [
      2
    ],
    "explanation": "Dataflows centralize reusable data preparation in a service-managed layer, depending on the workspace and capacity setup."
  },
  {
    "id": "prep-100",
    "domain": "Prepare the data",
    "topic": "Dataflows",
    "type": "single",
    "question": "A team maintaining a customer analytics model asks: what is a common reason to use a dataflow?",
    "options": [
      "Grant every user admin rights",
      "Reuse prepared data entities across multiple semantic models or reports",
      "Replace all DAX measures",
      "Create report page navigation only"
    ],
    "answer": [
      1
    ],
    "explanation": "Dataflows centralize reusable data preparation in a service-managed layer, depending on the workspace and capacity setup."
  },
  {
    "id": "prep-101",
    "domain": "Prepare the data",
    "topic": "Date dimension preparation",
    "type": "single",
    "question": "While working with a retail sales dataset, a date field includes timestamps, but the model needs daily grain. What is a sensible preparation step?",
    "options": [
      "Remove every row with a timestamp",
      "Create or extract a date-only column with a Date type",
      "Convert it to a binary value",
      "Keep time only"
    ],
    "answer": [
      1
    ],
    "explanation": "A date-only key aligns daily facts with a date dimension and avoids accidental mismatches caused by time portions."
  },
  {
    "id": "prep-102",
    "domain": "Prepare the data",
    "topic": "Date dimension preparation",
    "type": "single",
    "question": "Scenario: A finance reporting dataset. A date field includes timestamps, but the model needs daily grain. What is a sensible preparation step?",
    "options": [
      "Create or extract a date-only column with a Date type",
      "Convert it to a binary value",
      "Keep time only",
      "Remove every row with a timestamp"
    ],
    "answer": [
      0
    ],
    "explanation": "A date-only key aligns daily facts with a date dimension and avoids accidental mismatches caused by time portions."
  },
  {
    "id": "prep-103",
    "domain": "Prepare the data",
    "topic": "Date dimension preparation",
    "type": "single",
    "question": "For a customer analytics model, which action is most appropriate? A date field includes timestamps, but the model needs daily grain. What is a sensible preparation step?",
    "options": [
      "Convert it to a binary value",
      "Keep time only",
      "Remove every row with a timestamp",
      "Create or extract a date-only column with a Date type"
    ],
    "answer": [
      3
    ],
    "explanation": "A date-only key aligns daily facts with a date dimension and avoids accidental mismatches caused by time portions."
  },
  {
    "id": "prep-104",
    "domain": "Prepare the data",
    "topic": "Date dimension preparation",
    "type": "single",
    "question": "A team maintaining a monthly operational extract asks: a date field includes timestamps, but the model needs daily grain. What is a sensible preparation step?",
    "options": [
      "Keep time only",
      "Remove every row with a timestamp",
      "Create or extract a date-only column with a Date type",
      "Convert it to a binary value"
    ],
    "answer": [
      2
    ],
    "explanation": "A date-only key aligns daily facts with a date dimension and avoids accidental mismatches caused by time portions."
  },
  {
    "id": "prep-105",
    "domain": "Prepare the data",
    "topic": "Append versus merge",
    "type": "single",
    "question": "Knowledge check (Append versus merge) — A customer analytics model: select the best answer. You need to stack rows from tables with the same column structure. Which Power Query operation should you use?",
    "options": [
      "Append queries",
      "Group By",
      "Pivot columns",
      "Merge queries"
    ],
    "answer": [
      0
    ],
    "explanation": "Append stacks rows from compatible tables. Merge joins columns by matching key values."
  },
  {
    "id": "prep-106",
    "domain": "Prepare the data",
    "topic": "Merge queries",
    "type": "single",
    "question": "Knowledge check (Merge queries) — A monthly operational extract: select the best answer. You need to bring a customer segment from a lookup table into a sales query using CustomerID. Which operation fits?",
    "options": [
      "Fill Down",
      "Transpose",
      "Append queries",
      "Merge queries"
    ],
    "answer": [
      3
    ],
    "explanation": "Merge joins queries using one or more matching columns and a selected join kind."
  },
  {
    "id": "prep-107",
    "domain": "Prepare the data",
    "topic": "Folder connector",
    "type": "single",
    "question": "Knowledge check (Folder connector) — A product inventory report: select the best answer. You receive a monthly CSV file with the same schema and need to combine all files in a folder. What is the most suitable starting point?",
    "options": [
      "A workspace role",
      "The Folder connector and Combine Files",
      "A calculated column",
      "A bookmark"
    ],
    "answer": [
      1
    ],
    "explanation": "The Folder connector can enumerate files and combine files that share a compatible structure."
  },
  {
    "id": "prep-108",
    "domain": "Prepare the data",
    "topic": "Data types",
    "type": "single",
    "question": "Knowledge check (Data types) — A retail sales dataset: select the best answer. A date column is imported as text, so date filters and time calculations behave incorrectly. What should you do first?",
    "options": [
      "Convert it to a valid Date type",
      "Hide the column",
      "Create a bookmark",
      "Change the report theme"
    ],
    "answer": [
      0
    ],
    "explanation": "Correct data types improve transformations, relationships, sorting, and time intelligence."
  },
  {
    "id": "prep-109",
    "domain": "Prepare the data",
    "topic": "Column profiling",
    "type": "single",
    "question": "Knowledge check (Column profiling) — A finance reporting dataset: select the best answer. Which Power Query feature helps identify empty values, errors, value distribution, and distinct values?",
    "options": [
      "Performance Analyzer only",
      "RLS roles",
      "Q&A visual",
      "Column quality, distribution, and profile"
    ],
    "answer": [
      3
    ],
    "explanation": "Power Query profiling features help detect data quality issues and understand column contents."
  },
  {
    "id": "prep-110",
    "domain": "Prepare the data",
    "topic": "Remove unused columns",
    "type": "single",
    "question": "Knowledge check (Remove unused columns) — A customer analytics model: select the best answer. A source contains 90 columns but the report needs only 12. What is a strong model-size optimization?",
    "options": [
      "Convert all columns to text",
      "Duplicate the table",
      "Keep every source column for flexibility",
      "Remove unnecessary columns as early as practical"
    ],
    "answer": [
      3
    ],
    "explanation": "Reducing unused columns lowers model size and can improve refresh and query performance."
  },
  {
    "id": "prep-111",
    "domain": "Prepare the data",
    "topic": "Replace errors",
    "type": "single",
    "question": "Knowledge check (Replace errors) — A monthly operational extract: select the best answer. A numeric source column contains a few known invalid values. You must preserve the rows and substitute a documented fallback. What should you use?",
    "options": [
      "Create a report tooltip",
      "Remove all rows",
      "Replace Errors",
      "Disable load for the whole model"
    ],
    "answer": [
      2
    ],
    "explanation": "Replace Errors substitutes a specified value while retaining the affected rows; the replacement must be semantically justified."
  },
  {
    "id": "prep-112",
    "domain": "Prepare the data",
    "topic": "Null versus zero",
    "type": "single",
    "question": "Knowledge check (Null versus zero) — A product inventory report: select the best answer. A missing value means 'not reported', not zero. Why should you avoid blindly replacing nulls with 0?",
    "options": [
      "It can change business meaning and aggregates",
      "Nulls prevent all refreshes",
      "Zero cannot be numeric",
      "Power BI requires all columns to be filled"
    ],
    "answer": [
      0
    ],
    "explanation": "Null and zero express different meanings; replacing one with the other can distort analysis."
  },
  {
    "id": "prep-113",
    "domain": "Prepare the data",
    "topic": "Unpivot",
    "type": "single",
    "question": "Knowledge check (Unpivot) — A retail sales dataset: select the best answer. A table has separate columns for Jan, Feb, and Mar, and you need a Month column and a Value column. Which transformation is appropriate?",
    "options": [
      "Append columns",
      "Split by position",
      "Transpose twice",
      "Unpivot columns"
    ],
    "answer": [
      3
    ],
    "explanation": "Unpivot turns repeated attribute columns into attribute-value rows, making the table more analytical."
  },
  {
    "id": "prep-114",
    "domain": "Prepare the data",
    "topic": "Group By",
    "type": "single",
    "question": "Knowledge check (Group By) — A finance reporting dataset: select the best answer. You need one row per product category with total revenue and transaction count. Which transformation can aggregate rows?",
    "options": [
      "Use first row as headers",
      "Replace values",
      "Group By",
      "Fill Right"
    ],
    "answer": [
      2
    ],
    "explanation": "Group By groups rows by key columns and calculates aggregates such as sum or count."
  },
  {
    "id": "prep-115",
    "domain": "Prepare the data",
    "topic": "Split column",
    "type": "single",
    "question": "Knowledge check (Split column) — A customer analytics model: select the best answer. A column contains values like 'North-East|Retail'. You need separate Region and Channel fields. What should you use?",
    "options": [
      "Manage roles",
      "Split Column by delimiter",
      "Append queries",
      "Mark as date table"
    ],
    "answer": [
      1
    ],
    "explanation": "Splitting by the pipe delimiter creates separate columns from the compound text value."
  },
  {
    "id": "prep-116",
    "domain": "Prepare the data",
    "topic": "Reference query",
    "type": "single",
    "question": "Knowledge check (Reference query) — A monthly operational extract: select the best answer. Several output queries need the same cleaned source steps. What can reduce duplicated transformation logic?",
    "options": [
      "Create a reference query from the staging query",
      "Copy every step into each output",
      "Use a bookmark",
      "Add a calculated measure"
    ],
    "answer": [
      0
    ],
    "explanation": "A reference query reuses the upstream transformation logic; disable load for staging queries when appropriate."
  },
  {
    "id": "prep-117",
    "domain": "Prepare the data",
    "topic": "Disable load",
    "type": "single",
    "question": "Knowledge check (Disable load) — A product inventory report: select the best answer. A staging query is only used as an input to other queries and should not appear as a model table. What should you do?",
    "options": [
      "Delete all its steps",
      "Turn on bidirectional filtering",
      "Publish it as an app",
      "Disable load for the staging query"
    ],
    "answer": [
      3
    ],
    "explanation": "Disable Load prevents the intermediate query from being loaded into the semantic model while allowing downstream references."
  },
  {
    "id": "prep-118",
    "domain": "Prepare the data",
    "topic": "Query folding",
    "type": "single",
    "question": "Knowledge check (Query folding) — A retail sales dataset: select the best answer. Why is query folding valuable for a large relational source?",
    "options": [
      "It creates a star schema automatically",
      "It guarantees zero refresh time",
      "It can push supported transformations to the source system",
      "It encrypts every column automatically"
    ],
    "answer": [
      2
    ],
    "explanation": "When folding is supported, the source performs eligible transformations, often reducing transferred data and refresh work."
  },
  {
    "id": "prep-119",
    "domain": "Prepare the data",
    "topic": "Import mode",
    "type": "single",
    "question": "Knowledge check (Import mode) — A finance reporting dataset: select the best answer. Which statement best describes Import storage mode?",
    "options": [
      "It only supports Excel files",
      "Data is loaded into the Power BI model and refreshed on a schedule or manually",
      "Every visual always queries the source live",
      "No model data is stored"
    ],
    "answer": [
      1
    ],
    "explanation": "Import stores a compressed copy in the model; reports use the in-memory model between refreshes."
  },
  {
    "id": "prep-120",
    "domain": "Prepare the data",
    "topic": "DirectQuery",
    "type": "single",
    "question": "Knowledge check (DirectQuery) — A customer analytics model: select the best answer. When using DirectQuery, where are many data queries executed when users interact with visuals?",
    "options": [
      "Against the underlying data source",
      "Only inside Power Query at design time",
      "Only in the browser cache",
      "In the report theme file"
    ],
    "answer": [
      0
    ],
    "explanation": "DirectQuery sends queries to the source, so source performance, network latency, and model design matter."
  },
  {
    "id": "prep-121",
    "domain": "Prepare the data",
    "topic": "Composite model",
    "type": "single",
    "question": "Knowledge check (Composite model) — A monthly operational extract: select the best answer. A model needs imported aggregation tables plus detailed data queried in DirectQuery. Which approach can support this design?",
    "options": [
      "A single text column",
      "A bookmark group",
      "A report page tooltip only",
      "A composite model"
    ],
    "answer": [
      3
    ],
    "explanation": "Composite models can combine storage modes, subject to supported source and relationship constraints."
  },
  {
    "id": "prep-122",
    "domain": "Prepare the data",
    "topic": "Incremental refresh",
    "type": "single",
    "question": "Knowledge check (Incremental refresh) — A product inventory report: select the best answer. A large fact table receives new rows daily but historical rows rarely change. What feature can reduce refresh work?",
    "options": [
      "Convert the fact table to a bookmark",
      "Disable all relationships",
      "Incremental refresh with suitable date parameters and policy",
      "Refresh every visual manually"
    ],
    "answer": [
      2
    ],
    "explanation": "Incremental refresh partitions data by a date/time policy so only relevant partitions need refresh after initial processing."
  },
  {
    "id": "prep-123",
    "domain": "Prepare the data",
    "topic": "Parameters",
    "type": "single",
    "question": "Knowledge check (Parameters) — A retail sales dataset: select the best answer. You need to let a deployment change a server or database name without editing every query step. What helps?",
    "options": [
      "Drillthrough",
      "Power Query parameters",
      "Report bookmarks",
      "Conditional formatting"
    ],
    "answer": [
      1
    ],
    "explanation": "Parameters centralize values such as server names, paths, and date boundaries."
  },
  {
    "id": "prep-124",
    "domain": "Prepare the data",
    "topic": "Locale",
    "type": "single",
    "question": "Knowledge check (Locale) — A finance reporting dataset: select the best answer. A CSV date such as 03/04/2026 is interpreted differently across locales. What should you specify when converting it?",
    "options": [
      "The appropriate locale for the source format",
      "A random whole-number type",
      "A hidden column property",
      "A visual interaction"
    ],
    "answer": [
      0
    ],
    "explanation": "Using the correct locale avoids ambiguous day/month interpretation and conversion errors."
  },
  {
    "id": "prep-125",
    "domain": "Prepare the data",
    "topic": "Promote headers",
    "type": "single",
    "question": "Knowledge check (Promote headers) — A customer analytics model: select the best answer. The first row of a CSV contains field names but is currently loaded as data. What transformation is needed?",
    "options": [
      "Fill Down",
      "Unpivot",
      "Keep Errors",
      "Use First Row as Headers"
    ],
    "answer": [
      3
    ],
    "explanation": "Promoting headers converts the first row into column names."
  },
  {
    "id": "prep-126",
    "domain": "Prepare the data",
    "topic": "Duplicate removal",
    "type": "single",
    "question": "Knowledge check (Duplicate removal) — A monthly operational extract: select the best answer. A dimension must have one row per ProductKey. Which check is essential before creating a one-to-many relationship?",
    "options": [
      "Hide ProductKey",
      "Add a measure to the key",
      "Ensure ProductKey is unique on the dimension side",
      "Sort the table alphabetically"
    ],
    "answer": [
      2
    ],
    "explanation": "The one side of a one-to-many relationship requires unique key values."
  },
  {
    "id": "prep-127",
    "domain": "Prepare the data",
    "topic": "Data source credentials",
    "type": "single",
    "question": "Knowledge check (Data source credentials) — A product inventory report: select the best answer. A published semantic model fails refresh because credentials are missing. Where should the owner investigate first?",
    "options": [
      "The bookmark pane",
      "Semantic model settings and data source credentials",
      "The report's bar chart colors",
      "The DAX format string"
    ],
    "answer": [
      1
    ],
    "explanation": "Credentials and connection settings are configured for the published semantic model, with gateway configuration when needed."
  },
  {
    "id": "prep-128",
    "domain": "Prepare the data",
    "topic": "Privacy levels",
    "type": "single",
    "question": "Knowledge check (Privacy levels) — A retail sales dataset: select the best answer. Why should Power Query privacy levels be configured appropriately when combining sources?",
    "options": [
      "They help govern how data from different sources may be combined",
      "They replace all access controls",
      "They determine chart colors",
      "They guarantee the source is accurate"
    ],
    "answer": [
      0
    ],
    "explanation": "Privacy levels help prevent unintended data leakage between sources during mashup evaluation; they are not a substitute for security."
  },
  {
    "id": "prep-129",
    "domain": "Prepare the data",
    "topic": "Dataflows",
    "type": "single",
    "question": "Knowledge check (Dataflows) — A finance reporting dataset: select the best answer. What is a common reason to use a dataflow?",
    "options": [
      "Replace all DAX measures",
      "Create report page navigation only",
      "Grant every user admin rights",
      "Reuse prepared data entities across multiple semantic models or reports"
    ],
    "answer": [
      3
    ],
    "explanation": "Dataflows centralize reusable data preparation in a service-managed layer, depending on the workspace and capacity setup."
  },
  {
    "id": "prep-130",
    "domain": "Prepare the data",
    "topic": "Date dimension preparation",
    "type": "single",
    "question": "Knowledge check (Date dimension preparation) — A customer analytics model: select the best answer. A date field includes timestamps, but the model needs daily grain. What is a sensible preparation step?",
    "options": [
      "Keep time only",
      "Remove every row with a timestamp",
      "Create or extract a date-only column with a Date type",
      "Convert it to a binary value"
    ],
    "answer": [
      2
    ],
    "explanation": "A date-only key aligns daily facts with a date dimension and avoids accidental mismatches caused by time portions."
  },
  {
    "id": "model-001",
    "domain": "Model the data",
    "topic": "Star schema",
    "type": "single",
    "question": "While working with a sales semantic model, which design usually makes a Power BI semantic model easier to understand and query?",
    "options": [
      "A star schema with dimensions filtering a fact table",
      "One giant table with every attribute duplicated",
      "A circular network of bidirectional relationships",
      "No relationships at all"
    ],
    "answer": [
      0
    ],
    "explanation": "A star schema separates descriptive dimensions from measurable facts and usually simplifies filter propagation."
  },
  {
    "id": "model-002",
    "domain": "Model the data",
    "topic": "Star schema",
    "type": "single",
    "question": "Scenario: A customer profitability report. Which design usually makes a Power BI semantic model easier to understand and query?",
    "options": [
      "One giant table with every attribute duplicated",
      "A circular network of bidirectional relationships",
      "No relationships at all",
      "A star schema with dimensions filtering a fact table"
    ],
    "answer": [
      3
    ],
    "explanation": "A star schema separates descriptive dimensions from measurable facts and usually simplifies filter propagation."
  },
  {
    "id": "model-003",
    "domain": "Model the data",
    "topic": "Star schema",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? Which design usually makes a Power BI semantic model easier to understand and query?",
    "options": [
      "A circular network of bidirectional relationships",
      "No relationships at all",
      "A star schema with dimensions filtering a fact table",
      "One giant table with every attribute duplicated"
    ],
    "answer": [
      2
    ],
    "explanation": "A star schema separates descriptive dimensions from measurable facts and usually simplifies filter propagation."
  },
  {
    "id": "model-004",
    "domain": "Model the data",
    "topic": "Star schema",
    "type": "single",
    "question": "A team maintaining a service operations model asks: which design usually makes a Power BI semantic model easier to understand and query?",
    "options": [
      "No relationships at all",
      "A star schema with dimensions filtering a fact table",
      "One giant table with every attribute duplicated",
      "A circular network of bidirectional relationships"
    ],
    "answer": [
      1
    ],
    "explanation": "A star schema separates descriptive dimensions from measurable facts and usually simplifies filter propagation."
  },
  {
    "id": "model-005",
    "domain": "Model the data",
    "topic": "Fact grain",
    "type": "single",
    "question": "While working with a customer profitability report, before designing a fact table, what should you define explicitly?",
    "options": [
      "The number of bookmarks",
      "The grain: what one row represents",
      "The report background color",
      "The workspace description"
    ],
    "answer": [
      1
    ],
    "explanation": "A clear grain prevents mixing incompatible levels of detail and helps define keys and measures."
  },
  {
    "id": "model-006",
    "domain": "Model the data",
    "topic": "Fact grain",
    "type": "single",
    "question": "Scenario: A finance star schema. Before designing a fact table, what should you define explicitly?",
    "options": [
      "The grain: what one row represents",
      "The report background color",
      "The workspace description",
      "The number of bookmarks"
    ],
    "answer": [
      0
    ],
    "explanation": "A clear grain prevents mixing incompatible levels of detail and helps define keys and measures."
  },
  {
    "id": "model-007",
    "domain": "Model the data",
    "topic": "Fact grain",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? Before designing a fact table, what should you define explicitly?",
    "options": [
      "The report background color",
      "The workspace description",
      "The number of bookmarks",
      "The grain: what one row represents"
    ],
    "answer": [
      3
    ],
    "explanation": "A clear grain prevents mixing incompatible levels of detail and helps define keys and measures."
  },
  {
    "id": "model-008",
    "domain": "Model the data",
    "topic": "Fact grain",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: before designing a fact table, what should you define explicitly?",
    "options": [
      "The workspace description",
      "The number of bookmarks",
      "The grain: what one row represents",
      "The report background color"
    ],
    "answer": [
      2
    ],
    "explanation": "A clear grain prevents mixing incompatible levels of detail and helps define keys and measures."
  },
  {
    "id": "model-009",
    "domain": "Model the data",
    "topic": "Dimension key",
    "type": "single",
    "question": "While working with a finance star schema, which condition should generally hold for the key on the 'one' side of a one-to-many relationship?",
    "options": [
      "It repeats for every transaction",
      "It must be a decimal measure",
      "It is unique for each dimension row",
      "It is blank on every row"
    ],
    "answer": [
      2
    ],
    "explanation": "The one-side key must identify a unique dimension member."
  },
  {
    "id": "model-010",
    "domain": "Model the data",
    "topic": "Dimension key",
    "type": "single",
    "question": "Scenario: A service operations model. Which condition should generally hold for the key on the 'one' side of a one-to-many relationship?",
    "options": [
      "It must be a decimal measure",
      "It is unique for each dimension row",
      "It is blank on every row",
      "It repeats for every transaction"
    ],
    "answer": [
      1
    ],
    "explanation": "The one-side key must identify a unique dimension member."
  },
  {
    "id": "model-011",
    "domain": "Model the data",
    "topic": "Dimension key",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? Which condition should generally hold for the key on the 'one' side of a one-to-many relationship?",
    "options": [
      "It is unique for each dimension row",
      "It is blank on every row",
      "It repeats for every transaction",
      "It must be a decimal measure"
    ],
    "answer": [
      0
    ],
    "explanation": "The one-side key must identify a unique dimension member."
  },
  {
    "id": "model-012",
    "domain": "Model the data",
    "topic": "Dimension key",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: which condition should generally hold for the key on the 'one' side of a one-to-many relationship?",
    "options": [
      "It is blank on every row",
      "It repeats for every transaction",
      "It must be a decimal measure",
      "It is unique for each dimension row"
    ],
    "answer": [
      3
    ],
    "explanation": "The one-side key must identify a unique dimension member."
  },
  {
    "id": "model-013",
    "domain": "Model the data",
    "topic": "Relationship direction",
    "type": "single",
    "question": "While working with a service operations model, what is the usual starting point for cross-filter direction in a simple star schema?",
    "options": [
      "Bidirectional on every relationship",
      "No filtering in either direction",
      "Random direction per report page",
      "Single direction from dimension to fact"
    ],
    "answer": [
      3
    ],
    "explanation": "Single-direction dimension-to-fact filtering is predictable and reduces ambiguity in many star schemas."
  },
  {
    "id": "model-014",
    "domain": "Model the data",
    "topic": "Relationship direction",
    "type": "single",
    "question": "Scenario: A product analytics dataset. What is the usual starting point for cross-filter direction in a simple star schema?",
    "options": [
      "No filtering in either direction",
      "Random direction per report page",
      "Single direction from dimension to fact",
      "Bidirectional on every relationship"
    ],
    "answer": [
      2
    ],
    "explanation": "Single-direction dimension-to-fact filtering is predictable and reduces ambiguity in many star schemas."
  },
  {
    "id": "model-015",
    "domain": "Model the data",
    "topic": "Relationship direction",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? What is the usual starting point for cross-filter direction in a simple star schema?",
    "options": [
      "Random direction per report page",
      "Single direction from dimension to fact",
      "Bidirectional on every relationship",
      "No filtering in either direction"
    ],
    "answer": [
      1
    ],
    "explanation": "Single-direction dimension-to-fact filtering is predictable and reduces ambiguity in many star schemas."
  },
  {
    "id": "model-016",
    "domain": "Model the data",
    "topic": "Relationship direction",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: what is the usual starting point for cross-filter direction in a simple star schema?",
    "options": [
      "Single direction from dimension to fact",
      "Bidirectional on every relationship",
      "No filtering in either direction",
      "Random direction per report page"
    ],
    "answer": [
      0
    ],
    "explanation": "Single-direction dimension-to-fact filtering is predictable and reduces ambiguity in many star schemas."
  },
  {
    "id": "model-017",
    "domain": "Model the data",
    "topic": "Measure versus calculated column",
    "type": "single",
    "question": "While working with a product analytics dataset, how does a measure generally differ from a calculated column?",
    "options": [
      "A measure is evaluated at query time in the current filter context; a calculated column is stored per row after model processing",
      "A measure is always stored for each row",
      "A calculated column can never contain DAX",
      "They are identical in all contexts"
    ],
    "answer": [
      0
    ],
    "explanation": "Measures respond to report context; calculated columns are materialized values calculated row by row during processing."
  },
  {
    "id": "model-018",
    "domain": "Model the data",
    "topic": "Measure versus calculated column",
    "type": "single",
    "question": "Scenario: A sales semantic model. How does a measure generally differ from a calculated column?",
    "options": [
      "A measure is always stored for each row",
      "A calculated column can never contain DAX",
      "They are identical in all contexts",
      "A measure is evaluated at query time in the current filter context; a calculated column is stored per row after model processing"
    ],
    "answer": [
      3
    ],
    "explanation": "Measures respond to report context; calculated columns are materialized values calculated row by row during processing."
  },
  {
    "id": "model-019",
    "domain": "Model the data",
    "topic": "Measure versus calculated column",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? How does a measure generally differ from a calculated column?",
    "options": [
      "A calculated column can never contain DAX",
      "They are identical in all contexts",
      "A measure is evaluated at query time in the current filter context; a calculated column is stored per row after model processing",
      "A measure is always stored for each row"
    ],
    "answer": [
      2
    ],
    "explanation": "Measures respond to report context; calculated columns are materialized values calculated row by row during processing."
  },
  {
    "id": "model-020",
    "domain": "Model the data",
    "topic": "Measure versus calculated column",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: how does a measure generally differ from a calculated column?",
    "options": [
      "They are identical in all contexts",
      "A measure is evaluated at query time in the current filter context; a calculated column is stored per row after model processing",
      "A measure is always stored for each row",
      "A calculated column can never contain DAX"
    ],
    "answer": [
      1
    ],
    "explanation": "Measures respond to report context; calculated columns are materialized values calculated row by row during processing."
  },
  {
    "id": "model-021",
    "domain": "Model the data",
    "topic": "CALCULATE",
    "type": "single",
    "question": "While working with a sales semantic model, what is the primary purpose of CALCULATE in DAX?",
    "options": [
      "Create a workspace",
      "Evaluate an expression in a modified filter context",
      "Sort a table physically",
      "Import a CSV file"
    ],
    "answer": [
      1
    ],
    "explanation": "CALCULATE modifies filter context and is central to many DAX measures."
  },
  {
    "id": "model-022",
    "domain": "Model the data",
    "topic": "CALCULATE",
    "type": "single",
    "question": "Scenario: A customer profitability report. What is the primary purpose of CALCULATE in DAX?",
    "options": [
      "Evaluate an expression in a modified filter context",
      "Sort a table physically",
      "Import a CSV file",
      "Create a workspace"
    ],
    "answer": [
      0
    ],
    "explanation": "CALCULATE modifies filter context and is central to many DAX measures."
  },
  {
    "id": "model-023",
    "domain": "Model the data",
    "topic": "CALCULATE",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? What is the primary purpose of CALCULATE in DAX?",
    "options": [
      "Sort a table physically",
      "Import a CSV file",
      "Create a workspace",
      "Evaluate an expression in a modified filter context"
    ],
    "answer": [
      3
    ],
    "explanation": "CALCULATE modifies filter context and is central to many DAX measures."
  },
  {
    "id": "model-024",
    "domain": "Model the data",
    "topic": "CALCULATE",
    "type": "single",
    "question": "A team maintaining a service operations model asks: what is the primary purpose of CALCULATE in DAX?",
    "options": [
      "Import a CSV file",
      "Create a workspace",
      "Evaluate an expression in a modified filter context",
      "Sort a table physically"
    ],
    "answer": [
      2
    ],
    "explanation": "CALCULATE modifies filter context and is central to many DAX measures."
  },
  {
    "id": "model-025",
    "domain": "Model the data",
    "topic": "SUMX",
    "type": "single",
    "question": "While working with a customer profitability report, you need to sum Quantity multiplied by UnitPrice for each row in Sales. Which function is designed to iterate a table and sum an expression?",
    "options": [
      "COUNTROWS only",
      "FORMAT",
      "SUMX",
      "SUM only"
    ],
    "answer": [
      2
    ],
    "explanation": "SUMX evaluates the expression for each row of its table argument, then sums the results."
  },
  {
    "id": "model-026",
    "domain": "Model the data",
    "topic": "SUMX",
    "type": "single",
    "question": "Scenario: A finance star schema. You need to sum Quantity multiplied by UnitPrice for each row in Sales. Which function is designed to iterate a table and sum an expression?",
    "options": [
      "FORMAT",
      "SUMX",
      "SUM only",
      "COUNTROWS only"
    ],
    "answer": [
      1
    ],
    "explanation": "SUMX evaluates the expression for each row of its table argument, then sums the results."
  },
  {
    "id": "model-027",
    "domain": "Model the data",
    "topic": "SUMX",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? You need to sum Quantity multiplied by UnitPrice for each row in Sales. Which function is designed to iterate a table and sum an expression?",
    "options": [
      "SUMX",
      "SUM only",
      "COUNTROWS only",
      "FORMAT"
    ],
    "answer": [
      0
    ],
    "explanation": "SUMX evaluates the expression for each row of its table argument, then sums the results."
  },
  {
    "id": "model-028",
    "domain": "Model the data",
    "topic": "SUMX",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: you need to sum Quantity multiplied by UnitPrice for each row in Sales. Which function is designed to iterate a table and sum an expression?",
    "options": [
      "SUM only",
      "COUNTROWS only",
      "FORMAT",
      "SUMX"
    ],
    "answer": [
      3
    ],
    "explanation": "SUMX evaluates the expression for each row of its table argument, then sums the results."
  },
  {
    "id": "model-029",
    "domain": "Model the data",
    "topic": "Row context",
    "type": "single",
    "question": "While working with a finance star schema, what does row context provide in a calculated column or iterator?",
    "options": [
      "A list of all workspace users",
      "Automatic access to every slicer selection",
      "A security role definition",
      "Access to the current row's values"
    ],
    "answer": [
      3
    ],
    "explanation": "Row context identifies a current row. It is not the same as filter context."
  },
  {
    "id": "model-030",
    "domain": "Model the data",
    "topic": "Row context",
    "type": "single",
    "question": "Scenario: A service operations model. What does row context provide in a calculated column or iterator?",
    "options": [
      "Automatic access to every slicer selection",
      "A security role definition",
      "Access to the current row's values",
      "A list of all workspace users"
    ],
    "answer": [
      2
    ],
    "explanation": "Row context identifies a current row. It is not the same as filter context."
  },
  {
    "id": "model-031",
    "domain": "Model the data",
    "topic": "Row context",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? What does row context provide in a calculated column or iterator?",
    "options": [
      "A security role definition",
      "Access to the current row's values",
      "A list of all workspace users",
      "Automatic access to every slicer selection"
    ],
    "answer": [
      1
    ],
    "explanation": "Row context identifies a current row. It is not the same as filter context."
  },
  {
    "id": "model-032",
    "domain": "Model the data",
    "topic": "Row context",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: what does row context provide in a calculated column or iterator?",
    "options": [
      "Access to the current row's values",
      "A list of all workspace users",
      "Automatic access to every slicer selection",
      "A security role definition"
    ],
    "answer": [
      0
    ],
    "explanation": "Row context identifies a current row. It is not the same as filter context."
  },
  {
    "id": "model-033",
    "domain": "Model the data",
    "topic": "Filter context",
    "type": "single",
    "question": "While working with a service operations model, what most directly creates filter context for a measure in a report visual?",
    "options": [
      "Visual grouping, slicers, filters, and relationship propagation",
      "The DAX editor theme",
      "The column display folder",
      "The report file name"
    ],
    "answer": [
      0
    ],
    "explanation": "The query context established by visuals, slicers, filters, and relationships determines which data a measure evaluates."
  },
  {
    "id": "model-034",
    "domain": "Model the data",
    "topic": "Filter context",
    "type": "single",
    "question": "Scenario: A product analytics dataset. What most directly creates filter context for a measure in a report visual?",
    "options": [
      "The DAX editor theme",
      "The column display folder",
      "The report file name",
      "Visual grouping, slicers, filters, and relationship propagation"
    ],
    "answer": [
      3
    ],
    "explanation": "The query context established by visuals, slicers, filters, and relationships determines which data a measure evaluates."
  },
  {
    "id": "model-035",
    "domain": "Model the data",
    "topic": "Filter context",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? What most directly creates filter context for a measure in a report visual?",
    "options": [
      "The column display folder",
      "The report file name",
      "Visual grouping, slicers, filters, and relationship propagation",
      "The DAX editor theme"
    ],
    "answer": [
      2
    ],
    "explanation": "The query context established by visuals, slicers, filters, and relationships determines which data a measure evaluates."
  },
  {
    "id": "model-036",
    "domain": "Model the data",
    "topic": "Filter context",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: what most directly creates filter context for a measure in a report visual?",
    "options": [
      "The report file name",
      "Visual grouping, slicers, filters, and relationship propagation",
      "The DAX editor theme",
      "The column display folder"
    ],
    "answer": [
      1
    ],
    "explanation": "The query context established by visuals, slicers, filters, and relationships determines which data a measure evaluates."
  },
  {
    "id": "model-037",
    "domain": "Model the data",
    "topic": "Context transition",
    "type": "single",
    "question": "While working with a product analytics dataset, what does CALCULATE do with an existing row context when it is invoked without explicit filters?",
    "options": [
      "It disables relationships permanently",
      "It can perform context transition, converting row context into filter context",
      "It deletes the current row",
      "It changes all columns to text"
    ],
    "answer": [
      1
    ],
    "explanation": "Context transition is a key DAX behavior: CALCULATE can turn current row values into filters."
  },
  {
    "id": "model-038",
    "domain": "Model the data",
    "topic": "Context transition",
    "type": "single",
    "question": "Scenario: A sales semantic model. What does CALCULATE do with an existing row context when it is invoked without explicit filters?",
    "options": [
      "It can perform context transition, converting row context into filter context",
      "It deletes the current row",
      "It changes all columns to text",
      "It disables relationships permanently"
    ],
    "answer": [
      0
    ],
    "explanation": "Context transition is a key DAX behavior: CALCULATE can turn current row values into filters."
  },
  {
    "id": "model-039",
    "domain": "Model the data",
    "topic": "Context transition",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? What does CALCULATE do with an existing row context when it is invoked without explicit filters?",
    "options": [
      "It deletes the current row",
      "It changes all columns to text",
      "It disables relationships permanently",
      "It can perform context transition, converting row context into filter context"
    ],
    "answer": [
      3
    ],
    "explanation": "Context transition is a key DAX behavior: CALCULATE can turn current row values into filters."
  },
  {
    "id": "model-040",
    "domain": "Model the data",
    "topic": "Context transition",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: what does CALCULATE do with an existing row context when it is invoked without explicit filters?",
    "options": [
      "It changes all columns to text",
      "It disables relationships permanently",
      "It can perform context transition, converting row context into filter context",
      "It deletes the current row"
    ],
    "answer": [
      2
    ],
    "explanation": "Context transition is a key DAX behavior: CALCULATE can turn current row values into filters."
  },
  {
    "id": "model-041",
    "domain": "Model the data",
    "topic": "REMOVEFILTERS",
    "type": "single",
    "question": "While working with a sales semantic model, a measure should ignore a filter on Product while retaining other applicable filters. Which function can clear that filter when used appropriately in CALCULATE?",
    "options": [
      "FORMAT(Product)",
      "USERELATIONSHIP(Product)",
      "REMOVEFILTERS(Product)",
      "RELATED(Product)"
    ],
    "answer": [
      2
    ],
    "explanation": "REMOVEFILTERS clears filters from specified tables or columns within the calculation context."
  },
  {
    "id": "model-042",
    "domain": "Model the data",
    "topic": "REMOVEFILTERS",
    "type": "single",
    "question": "Scenario: A customer profitability report. A measure should ignore a filter on Product while retaining other applicable filters. Which function can clear that filter when used appropriately in CALCULATE?",
    "options": [
      "USERELATIONSHIP(Product)",
      "REMOVEFILTERS(Product)",
      "RELATED(Product)",
      "FORMAT(Product)"
    ],
    "answer": [
      1
    ],
    "explanation": "REMOVEFILTERS clears filters from specified tables or columns within the calculation context."
  },
  {
    "id": "model-043",
    "domain": "Model the data",
    "topic": "REMOVEFILTERS",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? A measure should ignore a filter on Product while retaining other applicable filters. Which function can clear that filter when used appropriately in CALCULATE?",
    "options": [
      "REMOVEFILTERS(Product)",
      "RELATED(Product)",
      "FORMAT(Product)",
      "USERELATIONSHIP(Product)"
    ],
    "answer": [
      0
    ],
    "explanation": "REMOVEFILTERS clears filters from specified tables or columns within the calculation context."
  },
  {
    "id": "model-044",
    "domain": "Model the data",
    "topic": "REMOVEFILTERS",
    "type": "single",
    "question": "A team maintaining a service operations model asks: a measure should ignore a filter on Product while retaining other applicable filters. Which function can clear that filter when used appropriately in CALCULATE?",
    "options": [
      "RELATED(Product)",
      "FORMAT(Product)",
      "USERELATIONSHIP(Product)",
      "REMOVEFILTERS(Product)"
    ],
    "answer": [
      3
    ],
    "explanation": "REMOVEFILTERS clears filters from specified tables or columns within the calculation context."
  },
  {
    "id": "model-045",
    "domain": "Model the data",
    "topic": "ALL",
    "type": "single",
    "question": "While working with a customer profitability report, what is a common use of ALL in a percentage-of-total calculation?",
    "options": [
      "Convert a measure into a column",
      "Create a relationship",
      "Format a date as text",
      "Remove selected filters from a table or column to calculate a broader denominator"
    ],
    "answer": [
      3
    ],
    "explanation": "ALL can return all rows or remove filters in a calculation; use it carefully to define the intended denominator."
  },
  {
    "id": "model-046",
    "domain": "Model the data",
    "topic": "ALL",
    "type": "single",
    "question": "Scenario: A finance star schema. What is a common use of ALL in a percentage-of-total calculation?",
    "options": [
      "Create a relationship",
      "Format a date as text",
      "Remove selected filters from a table or column to calculate a broader denominator",
      "Convert a measure into a column"
    ],
    "answer": [
      2
    ],
    "explanation": "ALL can return all rows or remove filters in a calculation; use it carefully to define the intended denominator."
  },
  {
    "id": "model-047",
    "domain": "Model the data",
    "topic": "ALL",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? What is a common use of ALL in a percentage-of-total calculation?",
    "options": [
      "Format a date as text",
      "Remove selected filters from a table or column to calculate a broader denominator",
      "Convert a measure into a column",
      "Create a relationship"
    ],
    "answer": [
      1
    ],
    "explanation": "ALL can return all rows or remove filters in a calculation; use it carefully to define the intended denominator."
  },
  {
    "id": "model-048",
    "domain": "Model the data",
    "topic": "ALL",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: what is a common use of ALL in a percentage-of-total calculation?",
    "options": [
      "Remove selected filters from a table or column to calculate a broader denominator",
      "Convert a measure into a column",
      "Create a relationship",
      "Format a date as text"
    ],
    "answer": [
      0
    ],
    "explanation": "ALL can return all rows or remove filters in a calculation; use it carefully to define the intended denominator."
  },
  {
    "id": "model-049",
    "domain": "Model the data",
    "topic": "KEEPFILTERS",
    "type": "single",
    "question": "While working with a finance star schema, when adding a filter inside CALCULATE, what can KEEPFILTERS do?",
    "options": [
      "Intersect the new filter with existing filters rather than replacing them on the same columns",
      "Remove all filters from the model",
      "Turn a measure into a calculated table",
      "Disable row-level security"
    ],
    "answer": [
      0
    ],
    "explanation": "KEEPFILTERS changes filter behavior so the new condition intersects with existing filters."
  },
  {
    "id": "model-050",
    "domain": "Model the data",
    "topic": "KEEPFILTERS",
    "type": "single",
    "question": "Scenario: A service operations model. When adding a filter inside CALCULATE, what can KEEPFILTERS do?",
    "options": [
      "Remove all filters from the model",
      "Turn a measure into a calculated table",
      "Disable row-level security",
      "Intersect the new filter with existing filters rather than replacing them on the same columns"
    ],
    "answer": [
      3
    ],
    "explanation": "KEEPFILTERS changes filter behavior so the new condition intersects with existing filters."
  },
  {
    "id": "model-051",
    "domain": "Model the data",
    "topic": "KEEPFILTERS",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? When adding a filter inside CALCULATE, what can KEEPFILTERS do?",
    "options": [
      "Turn a measure into a calculated table",
      "Disable row-level security",
      "Intersect the new filter with existing filters rather than replacing them on the same columns",
      "Remove all filters from the model"
    ],
    "answer": [
      2
    ],
    "explanation": "KEEPFILTERS changes filter behavior so the new condition intersects with existing filters."
  },
  {
    "id": "model-052",
    "domain": "Model the data",
    "topic": "KEEPFILTERS",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: when adding a filter inside CALCULATE, what can KEEPFILTERS do?",
    "options": [
      "Disable row-level security",
      "Intersect the new filter with existing filters rather than replacing them on the same columns",
      "Remove all filters from the model",
      "Turn a measure into a calculated table"
    ],
    "answer": [
      1
    ],
    "explanation": "KEEPFILTERS changes filter behavior so the new condition intersects with existing filters."
  },
  {
    "id": "model-053",
    "domain": "Model the data",
    "topic": "RELATED",
    "type": "single",
    "question": "While working with a service operations model, in a calculated column on Sales, you need a value from the related one-side Product table. Which function is commonly appropriate?",
    "options": [
      "USERELATIONSHIP",
      "RELATED",
      "SUMX",
      "DISTINCTCOUNT"
    ],
    "answer": [
      1
    ],
    "explanation": "RELATED retrieves a related value by following an existing relationship, commonly from many-side to one-side."
  },
  {
    "id": "model-054",
    "domain": "Model the data",
    "topic": "RELATED",
    "type": "single",
    "question": "Scenario: A product analytics dataset. In a calculated column on Sales, you need a value from the related one-side Product table. Which function is commonly appropriate?",
    "options": [
      "RELATED",
      "SUMX",
      "DISTINCTCOUNT",
      "USERELATIONSHIP"
    ],
    "answer": [
      0
    ],
    "explanation": "RELATED retrieves a related value by following an existing relationship, commonly from many-side to one-side."
  },
  {
    "id": "model-055",
    "domain": "Model the data",
    "topic": "RELATED",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? In a calculated column on Sales, you need a value from the related one-side Product table. Which function is commonly appropriate?",
    "options": [
      "SUMX",
      "DISTINCTCOUNT",
      "USERELATIONSHIP",
      "RELATED"
    ],
    "answer": [
      3
    ],
    "explanation": "RELATED retrieves a related value by following an existing relationship, commonly from many-side to one-side."
  },
  {
    "id": "model-056",
    "domain": "Model the data",
    "topic": "RELATED",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: in a calculated column on Sales, you need a value from the related one-side Product table. Which function is commonly appropriate?",
    "options": [
      "DISTINCTCOUNT",
      "USERELATIONSHIP",
      "RELATED",
      "SUMX"
    ],
    "answer": [
      2
    ],
    "explanation": "RELATED retrieves a related value by following an existing relationship, commonly from many-side to one-side."
  },
  {
    "id": "model-057",
    "domain": "Model the data",
    "topic": "RELATEDTABLE",
    "type": "single",
    "question": "While working with a product analytics dataset, what does RELATEDTABLE return in a row context?",
    "options": [
      "A new relationship object",
      "The report filter pane",
      "The related rows from another table",
      "A formatted text label only"
    ],
    "answer": [
      2
    ],
    "explanation": "RELATEDTABLE evaluates a table of related rows based on the current row context and relationship."
  },
  {
    "id": "model-058",
    "domain": "Model the data",
    "topic": "RELATEDTABLE",
    "type": "single",
    "question": "Scenario: A sales semantic model. What does RELATEDTABLE return in a row context?",
    "options": [
      "The report filter pane",
      "The related rows from another table",
      "A formatted text label only",
      "A new relationship object"
    ],
    "answer": [
      1
    ],
    "explanation": "RELATEDTABLE evaluates a table of related rows based on the current row context and relationship."
  },
  {
    "id": "model-059",
    "domain": "Model the data",
    "topic": "RELATEDTABLE",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? What does RELATEDTABLE return in a row context?",
    "options": [
      "The related rows from another table",
      "A formatted text label only",
      "A new relationship object",
      "The report filter pane"
    ],
    "answer": [
      0
    ],
    "explanation": "RELATEDTABLE evaluates a table of related rows based on the current row context and relationship."
  },
  {
    "id": "model-060",
    "domain": "Model the data",
    "topic": "RELATEDTABLE",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: what does RELATEDTABLE return in a row context?",
    "options": [
      "A formatted text label only",
      "A new relationship object",
      "The report filter pane",
      "The related rows from another table"
    ],
    "answer": [
      3
    ],
    "explanation": "RELATEDTABLE evaluates a table of related rows based on the current row context and relationship."
  },
  {
    "id": "model-061",
    "domain": "Model the data",
    "topic": "DISTINCTCOUNT",
    "type": "single",
    "question": "While working with a sales semantic model, you need the number of unique customers who placed sales in the current context. Which function is suitable?",
    "options": [
      "SUM(Sales[CustomerID])",
      "FORMAT(Sales[CustomerID])",
      "COUNTBLANK(Sales[CustomerID])",
      "DISTINCTCOUNT(Sales[CustomerID])"
    ],
    "answer": [
      3
    ],
    "explanation": "DISTINCTCOUNT counts distinct values in a column, including blank as a distinct value if present."
  },
  {
    "id": "model-062",
    "domain": "Model the data",
    "topic": "DISTINCTCOUNT",
    "type": "single",
    "question": "Scenario: A customer profitability report. You need the number of unique customers who placed sales in the current context. Which function is suitable?",
    "options": [
      "FORMAT(Sales[CustomerID])",
      "COUNTBLANK(Sales[CustomerID])",
      "DISTINCTCOUNT(Sales[CustomerID])",
      "SUM(Sales[CustomerID])"
    ],
    "answer": [
      2
    ],
    "explanation": "DISTINCTCOUNT counts distinct values in a column, including blank as a distinct value if present."
  },
  {
    "id": "model-063",
    "domain": "Model the data",
    "topic": "DISTINCTCOUNT",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? You need the number of unique customers who placed sales in the current context. Which function is suitable?",
    "options": [
      "COUNTBLANK(Sales[CustomerID])",
      "DISTINCTCOUNT(Sales[CustomerID])",
      "SUM(Sales[CustomerID])",
      "FORMAT(Sales[CustomerID])"
    ],
    "answer": [
      1
    ],
    "explanation": "DISTINCTCOUNT counts distinct values in a column, including blank as a distinct value if present."
  },
  {
    "id": "model-064",
    "domain": "Model the data",
    "topic": "DISTINCTCOUNT",
    "type": "single",
    "question": "A team maintaining a service operations model asks: you need the number of unique customers who placed sales in the current context. Which function is suitable?",
    "options": [
      "DISTINCTCOUNT(Sales[CustomerID])",
      "SUM(Sales[CustomerID])",
      "FORMAT(Sales[CustomerID])",
      "COUNTBLANK(Sales[CustomerID])"
    ],
    "answer": [
      0
    ],
    "explanation": "DISTINCTCOUNT counts distinct values in a column, including blank as a distinct value if present."
  },
  {
    "id": "model-065",
    "domain": "Model the data",
    "topic": "DIVIDE",
    "type": "single",
    "question": "While working with a customer profitability report, why is DIVIDE([Profit], [Revenue], 0) often safer than [Profit] / [Revenue]?",
    "options": [
      "It lets you specify a result for a zero or blank denominator",
      "It automatically fixes incorrect business logic",
      "It changes row context to filter context",
      "It makes the measure a column"
    ],
    "answer": [
      0
    ],
    "explanation": "DIVIDE handles a zero or blank denominator and can return an alternate result."
  },
  {
    "id": "model-066",
    "domain": "Model the data",
    "topic": "DIVIDE",
    "type": "single",
    "question": "Scenario: A finance star schema. Why is DIVIDE([Profit], [Revenue], 0) often safer than [Profit] / [Revenue]?",
    "options": [
      "It automatically fixes incorrect business logic",
      "It changes row context to filter context",
      "It makes the measure a column",
      "It lets you specify a result for a zero or blank denominator"
    ],
    "answer": [
      3
    ],
    "explanation": "DIVIDE handles a zero or blank denominator and can return an alternate result."
  },
  {
    "id": "model-067",
    "domain": "Model the data",
    "topic": "DIVIDE",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? Why is DIVIDE([Profit], [Revenue], 0) often safer than [Profit] / [Revenue]?",
    "options": [
      "It changes row context to filter context",
      "It makes the measure a column",
      "It lets you specify a result for a zero or blank denominator",
      "It automatically fixes incorrect business logic"
    ],
    "answer": [
      2
    ],
    "explanation": "DIVIDE handles a zero or blank denominator and can return an alternate result."
  },
  {
    "id": "model-068",
    "domain": "Model the data",
    "topic": "DIVIDE",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: why is DIVIDE([Profit], [Revenue], 0) often safer than [Profit] / [Revenue]?",
    "options": [
      "It makes the measure a column",
      "It lets you specify a result for a zero or blank denominator",
      "It automatically fixes incorrect business logic",
      "It changes row context to filter context"
    ],
    "answer": [
      1
    ],
    "explanation": "DIVIDE handles a zero or blank denominator and can return an alternate result."
  },
  {
    "id": "model-069",
    "domain": "Model the data",
    "topic": "Variables",
    "type": "single",
    "question": "While working with a finance star schema, why use VAR and RETURN in a complex measure?",
    "options": [
      "Make all filters disappear",
      "Improve readability, reuse intermediate results, and avoid repeating expressions",
      "Create a permanent table automatically",
      "Replace relationships"
    ],
    "answer": [
      1
    ],
    "explanation": "Variables make DAX easier to read and maintain and can avoid repeated evaluation of the same expression."
  },
  {
    "id": "model-070",
    "domain": "Model the data",
    "topic": "Variables",
    "type": "single",
    "question": "Scenario: A service operations model. Why use VAR and RETURN in a complex measure?",
    "options": [
      "Improve readability, reuse intermediate results, and avoid repeating expressions",
      "Create a permanent table automatically",
      "Replace relationships",
      "Make all filters disappear"
    ],
    "answer": [
      0
    ],
    "explanation": "Variables make DAX easier to read and maintain and can avoid repeated evaluation of the same expression."
  },
  {
    "id": "model-071",
    "domain": "Model the data",
    "topic": "Variables",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? Why use VAR and RETURN in a complex measure?",
    "options": [
      "Create a permanent table automatically",
      "Replace relationships",
      "Make all filters disappear",
      "Improve readability, reuse intermediate results, and avoid repeating expressions"
    ],
    "answer": [
      3
    ],
    "explanation": "Variables make DAX easier to read and maintain and can avoid repeated evaluation of the same expression."
  },
  {
    "id": "model-072",
    "domain": "Model the data",
    "topic": "Variables",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: why use VAR and RETURN in a complex measure?",
    "options": [
      "Replace relationships",
      "Make all filters disappear",
      "Improve readability, reuse intermediate results, and avoid repeating expressions",
      "Create a permanent table automatically"
    ],
    "answer": [
      2
    ],
    "explanation": "Variables make DAX easier to read and maintain and can avoid repeated evaluation of the same expression."
  },
  {
    "id": "model-073",
    "domain": "Model the data",
    "topic": "IF and SWITCH",
    "type": "single",
    "question": "While working with a service operations model, a measure maps a status code to several labels. Which function is often clearer for multiple discrete branches?",
    "options": [
      "RELATEDTABLE",
      "ALLSELECTED only",
      "SWITCH",
      "SUM"
    ],
    "answer": [
      2
    ],
    "explanation": "SWITCH can make multi-branch conditional logic clearer than deeply nested IF expressions."
  },
  {
    "id": "model-074",
    "domain": "Model the data",
    "topic": "IF and SWITCH",
    "type": "single",
    "question": "Scenario: A product analytics dataset. A measure maps a status code to several labels. Which function is often clearer for multiple discrete branches?",
    "options": [
      "ALLSELECTED only",
      "SWITCH",
      "SUM",
      "RELATEDTABLE"
    ],
    "answer": [
      1
    ],
    "explanation": "SWITCH can make multi-branch conditional logic clearer than deeply nested IF expressions."
  },
  {
    "id": "model-075",
    "domain": "Model the data",
    "topic": "IF and SWITCH",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? A measure maps a status code to several labels. Which function is often clearer for multiple discrete branches?",
    "options": [
      "SWITCH",
      "SUM",
      "RELATEDTABLE",
      "ALLSELECTED only"
    ],
    "answer": [
      0
    ],
    "explanation": "SWITCH can make multi-branch conditional logic clearer than deeply nested IF expressions."
  },
  {
    "id": "model-076",
    "domain": "Model the data",
    "topic": "IF and SWITCH",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: a measure maps a status code to several labels. Which function is often clearer for multiple discrete branches?",
    "options": [
      "SUM",
      "RELATEDTABLE",
      "ALLSELECTED only",
      "SWITCH"
    ],
    "answer": [
      3
    ],
    "explanation": "SWITCH can make multi-branch conditional logic clearer than deeply nested IF expressions."
  },
  {
    "id": "model-077",
    "domain": "Model the data",
    "topic": "Date table",
    "type": "single",
    "question": "While working with a product analytics dataset, what is a useful property of a dedicated date table for time intelligence?",
    "options": [
      "Only dates that have sales",
      "Duplicate dates for every product",
      "Date labels stored only as images",
      "A continuous date column with one row per date and appropriate date-table configuration"
    ],
    "answer": [
      3
    ],
    "explanation": "A complete date dimension supports consistent time filtering and common time-intelligence patterns."
  },
  {
    "id": "model-078",
    "domain": "Model the data",
    "topic": "Date table",
    "type": "single",
    "question": "Scenario: A sales semantic model. What is a useful property of a dedicated date table for time intelligence?",
    "options": [
      "Duplicate dates for every product",
      "Date labels stored only as images",
      "A continuous date column with one row per date and appropriate date-table configuration",
      "Only dates that have sales"
    ],
    "answer": [
      2
    ],
    "explanation": "A complete date dimension supports consistent time filtering and common time-intelligence patterns."
  },
  {
    "id": "model-079",
    "domain": "Model the data",
    "topic": "Date table",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? What is a useful property of a dedicated date table for time intelligence?",
    "options": [
      "Date labels stored only as images",
      "A continuous date column with one row per date and appropriate date-table configuration",
      "Only dates that have sales",
      "Duplicate dates for every product"
    ],
    "answer": [
      1
    ],
    "explanation": "A complete date dimension supports consistent time filtering and common time-intelligence patterns."
  },
  {
    "id": "model-080",
    "domain": "Model the data",
    "topic": "Date table",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: what is a useful property of a dedicated date table for time intelligence?",
    "options": [
      "A continuous date column with one row per date and appropriate date-table configuration",
      "Only dates that have sales",
      "Duplicate dates for every product",
      "Date labels stored only as images"
    ],
    "answer": [
      0
    ],
    "explanation": "A complete date dimension supports consistent time filtering and common time-intelligence patterns."
  },
  {
    "id": "model-081",
    "domain": "Model the data",
    "topic": "DATEADD",
    "type": "single",
    "question": "While working with a sales semantic model, what is DATEADD commonly used for in a date-based measure?",
    "options": [
      "Shift the current date selection by a specified interval",
      "Change a number's decimal places",
      "Create a security role",
      "Join two text columns"
    ],
    "answer": [
      0
    ],
    "explanation": "DATEADD returns a table of dates shifted by the specified interval, subject to date-column and context requirements."
  },
  {
    "id": "model-082",
    "domain": "Model the data",
    "topic": "DATEADD",
    "type": "single",
    "question": "Scenario: A customer profitability report. What is DATEADD commonly used for in a date-based measure?",
    "options": [
      "Change a number's decimal places",
      "Create a security role",
      "Join two text columns",
      "Shift the current date selection by a specified interval"
    ],
    "answer": [
      3
    ],
    "explanation": "DATEADD returns a table of dates shifted by the specified interval, subject to date-column and context requirements."
  },
  {
    "id": "model-083",
    "domain": "Model the data",
    "topic": "DATEADD",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? What is DATEADD commonly used for in a date-based measure?",
    "options": [
      "Create a security role",
      "Join two text columns",
      "Shift the current date selection by a specified interval",
      "Change a number's decimal places"
    ],
    "answer": [
      2
    ],
    "explanation": "DATEADD returns a table of dates shifted by the specified interval, subject to date-column and context requirements."
  },
  {
    "id": "model-084",
    "domain": "Model the data",
    "topic": "DATEADD",
    "type": "single",
    "question": "A team maintaining a service operations model asks: what is DATEADD commonly used for in a date-based measure?",
    "options": [
      "Join two text columns",
      "Shift the current date selection by a specified interval",
      "Change a number's decimal places",
      "Create a security role"
    ],
    "answer": [
      1
    ],
    "explanation": "DATEADD returns a table of dates shifted by the specified interval, subject to date-column and context requirements."
  },
  {
    "id": "model-085",
    "domain": "Model the data",
    "topic": "SAMEPERIODLASTYEAR",
    "type": "single",
    "question": "While working with a customer profitability report, what is the common intent of SAMEPERIODLASTYEAR(Calendar[Date])?",
    "options": [
      "Remove every filter",
      "Return the corresponding date period one year earlier",
      "Return the previous physical row in any table",
      "Calculate a running total automatically"
    ],
    "answer": [
      1
    ],
    "explanation": "It returns dates corresponding to the same period in the previous year when used in a suitable time-intelligence pattern."
  },
  {
    "id": "model-086",
    "domain": "Model the data",
    "topic": "SAMEPERIODLASTYEAR",
    "type": "single",
    "question": "Scenario: A finance star schema. What is the common intent of SAMEPERIODLASTYEAR(Calendar[Date])?",
    "options": [
      "Return the corresponding date period one year earlier",
      "Return the previous physical row in any table",
      "Calculate a running total automatically",
      "Remove every filter"
    ],
    "answer": [
      0
    ],
    "explanation": "It returns dates corresponding to the same period in the previous year when used in a suitable time-intelligence pattern."
  },
  {
    "id": "model-087",
    "domain": "Model the data",
    "topic": "SAMEPERIODLASTYEAR",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? What is the common intent of SAMEPERIODLASTYEAR(Calendar[Date])?",
    "options": [
      "Return the previous physical row in any table",
      "Calculate a running total automatically",
      "Remove every filter",
      "Return the corresponding date period one year earlier"
    ],
    "answer": [
      3
    ],
    "explanation": "It returns dates corresponding to the same period in the previous year when used in a suitable time-intelligence pattern."
  },
  {
    "id": "model-088",
    "domain": "Model the data",
    "topic": "SAMEPERIODLASTYEAR",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: what is the common intent of SAMEPERIODLASTYEAR(Calendar[Date])?",
    "options": [
      "Calculate a running total automatically",
      "Remove every filter",
      "Return the corresponding date period one year earlier",
      "Return the previous physical row in any table"
    ],
    "answer": [
      2
    ],
    "explanation": "It returns dates corresponding to the same period in the previous year when used in a suitable time-intelligence pattern."
  },
  {
    "id": "model-089",
    "domain": "Model the data",
    "topic": "Running total",
    "type": "single",
    "question": "While working with a finance star schema, which general DAX pattern is commonly used for a cumulative sales total over dates?",
    "options": [
      "RELATED(Calendar[Date])",
      "COUNTBLANK(Calendar[Date])",
      "CALCULATE([Sales], FILTER(ALLSELECTED(Calendar[Date]), Calendar[Date] <= MAX(Calendar[Date])))",
      "FORMAT([Sales], '0')"
    ],
    "answer": [
      2
    ],
    "explanation": "A running total evaluates the measure over dates up to the current date, with the exact ALL/ALLSELECTED choice depending on desired slicer behavior."
  },
  {
    "id": "model-090",
    "domain": "Model the data",
    "topic": "Running total",
    "type": "single",
    "question": "Scenario: A service operations model. Which general DAX pattern is commonly used for a cumulative sales total over dates?",
    "options": [
      "COUNTBLANK(Calendar[Date])",
      "CALCULATE([Sales], FILTER(ALLSELECTED(Calendar[Date]), Calendar[Date] <= MAX(Calendar[Date])))",
      "FORMAT([Sales], '0')",
      "RELATED(Calendar[Date])"
    ],
    "answer": [
      1
    ],
    "explanation": "A running total evaluates the measure over dates up to the current date, with the exact ALL/ALLSELECTED choice depending on desired slicer behavior."
  },
  {
    "id": "model-091",
    "domain": "Model the data",
    "topic": "Running total",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? Which general DAX pattern is commonly used for a cumulative sales total over dates?",
    "options": [
      "CALCULATE([Sales], FILTER(ALLSELECTED(Calendar[Date]), Calendar[Date] <= MAX(Calendar[Date])))",
      "FORMAT([Sales], '0')",
      "RELATED(Calendar[Date])",
      "COUNTBLANK(Calendar[Date])"
    ],
    "answer": [
      0
    ],
    "explanation": "A running total evaluates the measure over dates up to the current date, with the exact ALL/ALLSELECTED choice depending on desired slicer behavior."
  },
  {
    "id": "model-092",
    "domain": "Model the data",
    "topic": "Running total",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: which general DAX pattern is commonly used for a cumulative sales total over dates?",
    "options": [
      "FORMAT([Sales], '0')",
      "RELATED(Calendar[Date])",
      "COUNTBLANK(Calendar[Date])",
      "CALCULATE([Sales], FILTER(ALLSELECTED(Calendar[Date]), Calendar[Date] <= MAX(Calendar[Date])))"
    ],
    "answer": [
      3
    ],
    "explanation": "A running total evaluates the measure over dates up to the current date, with the exact ALL/ALLSELECTED choice depending on desired slicer behavior."
  },
  {
    "id": "model-093",
    "domain": "Model the data",
    "topic": "Ranking",
    "type": "single",
    "question": "While working with a service operations model, which function is designed to rank a value within a table or set of peers?",
    "options": [
      "SUMMARIZECOLUMNS only",
      "DATE",
      "USERELATIONSHIP",
      "RANKX"
    ],
    "answer": [
      3
    ],
    "explanation": "RANKX evaluates an expression over a table and ranks the current value relative to the set."
  },
  {
    "id": "model-094",
    "domain": "Model the data",
    "topic": "Ranking",
    "type": "single",
    "question": "Scenario: A product analytics dataset. Which function is designed to rank a value within a table or set of peers?",
    "options": [
      "DATE",
      "USERELATIONSHIP",
      "RANKX",
      "SUMMARIZECOLUMNS only"
    ],
    "answer": [
      2
    ],
    "explanation": "RANKX evaluates an expression over a table and ranks the current value relative to the set."
  },
  {
    "id": "model-095",
    "domain": "Model the data",
    "topic": "Ranking",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? Which function is designed to rank a value within a table or set of peers?",
    "options": [
      "USERELATIONSHIP",
      "RANKX",
      "SUMMARIZECOLUMNS only",
      "DATE"
    ],
    "answer": [
      1
    ],
    "explanation": "RANKX evaluates an expression over a table and ranks the current value relative to the set."
  },
  {
    "id": "model-096",
    "domain": "Model the data",
    "topic": "Ranking",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: which function is designed to rank a value within a table or set of peers?",
    "options": [
      "RANKX",
      "SUMMARIZECOLUMNS only",
      "DATE",
      "USERELATIONSHIP"
    ],
    "answer": [
      0
    ],
    "explanation": "RANKX evaluates an expression over a table and ranks the current value relative to the set."
  },
  {
    "id": "model-097",
    "domain": "Model the data",
    "topic": "Inactive relationship",
    "type": "single",
    "question": "While working with a product analytics dataset, a model has an inactive relationship from Calendar to ShipDate. Which function can activate it inside a measure?",
    "options": [
      "USERELATIONSHIP",
      "RELATEDTABLE",
      "REMOVEFILTERS",
      "FORMAT"
    ],
    "answer": [
      0
    ],
    "explanation": "USERELATIONSHIP enables an existing relationship for the duration of a calculation such as CALCULATE."
  },
  {
    "id": "model-098",
    "domain": "Model the data",
    "topic": "Inactive relationship",
    "type": "single",
    "question": "Scenario: A sales semantic model. A model has an inactive relationship from Calendar to ShipDate. Which function can activate it inside a measure?",
    "options": [
      "RELATEDTABLE",
      "REMOVEFILTERS",
      "FORMAT",
      "USERELATIONSHIP"
    ],
    "answer": [
      3
    ],
    "explanation": "USERELATIONSHIP enables an existing relationship for the duration of a calculation such as CALCULATE."
  },
  {
    "id": "model-099",
    "domain": "Model the data",
    "topic": "Inactive relationship",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? A model has an inactive relationship from Calendar to ShipDate. Which function can activate it inside a measure?",
    "options": [
      "REMOVEFILTERS",
      "FORMAT",
      "USERELATIONSHIP",
      "RELATEDTABLE"
    ],
    "answer": [
      2
    ],
    "explanation": "USERELATIONSHIP enables an existing relationship for the duration of a calculation such as CALCULATE."
  },
  {
    "id": "model-100",
    "domain": "Model the data",
    "topic": "Inactive relationship",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: a model has an inactive relationship from Calendar to ShipDate. Which function can activate it inside a measure?",
    "options": [
      "FORMAT",
      "USERELATIONSHIP",
      "RELATEDTABLE",
      "REMOVEFILTERS"
    ],
    "answer": [
      1
    ],
    "explanation": "USERELATIONSHIP enables an existing relationship for the duration of a calculation such as CALCULATE."
  },
  {
    "id": "model-101",
    "domain": "Model the data",
    "topic": "TREATAS",
    "type": "single",
    "question": "While working with a sales semantic model, a disconnected selector table should apply its selected values as filters to a different column. Which function can support this?",
    "options": [
      "ISINSCOPE",
      "TREATAS",
      "SUMX",
      "COUNTBLANK"
    ],
    "answer": [
      1
    ],
    "explanation": "TREATAS applies the values of a table expression as filters to specified columns."
  },
  {
    "id": "model-102",
    "domain": "Model the data",
    "topic": "TREATAS",
    "type": "single",
    "question": "Scenario: A customer profitability report. A disconnected selector table should apply its selected values as filters to a different column. Which function can support this?",
    "options": [
      "TREATAS",
      "SUMX",
      "COUNTBLANK",
      "ISINSCOPE"
    ],
    "answer": [
      0
    ],
    "explanation": "TREATAS applies the values of a table expression as filters to specified columns."
  },
  {
    "id": "model-103",
    "domain": "Model the data",
    "topic": "TREATAS",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? A disconnected selector table should apply its selected values as filters to a different column. Which function can support this?",
    "options": [
      "SUMX",
      "COUNTBLANK",
      "ISINSCOPE",
      "TREATAS"
    ],
    "answer": [
      3
    ],
    "explanation": "TREATAS applies the values of a table expression as filters to specified columns."
  },
  {
    "id": "model-104",
    "domain": "Model the data",
    "topic": "TREATAS",
    "type": "single",
    "question": "A team maintaining a service operations model asks: a disconnected selector table should apply its selected values as filters to a different column. Which function can support this?",
    "options": [
      "COUNTBLANK",
      "ISINSCOPE",
      "TREATAS",
      "SUMX"
    ],
    "answer": [
      2
    ],
    "explanation": "TREATAS applies the values of a table expression as filters to specified columns."
  },
  {
    "id": "model-105",
    "domain": "Model the data",
    "topic": "ISINSCOPE",
    "type": "single",
    "question": "While working with a customer profitability report, a matrix measure needs to detect whether Product[Category] is the current grouping level. Which function is designed for this check?",
    "options": [
      "RELATED",
      "NOW",
      "ISINSCOPE",
      "DISTINCTCOUNT"
    ],
    "answer": [
      2
    ],
    "explanation": "ISINSCOPE tests whether a column is the current level in a hierarchy of grouping levels."
  },
  {
    "id": "model-106",
    "domain": "Model the data",
    "topic": "ISINSCOPE",
    "type": "single",
    "question": "Scenario: A finance star schema. A matrix measure needs to detect whether Product[Category] is the current grouping level. Which function is designed for this check?",
    "options": [
      "NOW",
      "ISINSCOPE",
      "DISTINCTCOUNT",
      "RELATED"
    ],
    "answer": [
      1
    ],
    "explanation": "ISINSCOPE tests whether a column is the current level in a hierarchy of grouping levels."
  },
  {
    "id": "model-107",
    "domain": "Model the data",
    "topic": "ISINSCOPE",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? A matrix measure needs to detect whether Product[Category] is the current grouping level. Which function is designed for this check?",
    "options": [
      "ISINSCOPE",
      "DISTINCTCOUNT",
      "RELATED",
      "NOW"
    ],
    "answer": [
      0
    ],
    "explanation": "ISINSCOPE tests whether a column is the current level in a hierarchy of grouping levels."
  },
  {
    "id": "model-108",
    "domain": "Model the data",
    "topic": "ISINSCOPE",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: a matrix measure needs to detect whether Product[Category] is the current grouping level. Which function is designed for this check?",
    "options": [
      "DISTINCTCOUNT",
      "RELATED",
      "NOW",
      "ISINSCOPE"
    ],
    "answer": [
      3
    ],
    "explanation": "ISINSCOPE tests whether a column is the current level in a hierarchy of grouping levels."
  },
  {
    "id": "model-109",
    "domain": "Model the data",
    "topic": "SELECTEDVALUE",
    "type": "single",
    "question": "While working with a finance star schema, a measure should return the one selected region when exactly one region is in context, otherwise 'Multiple'. Which function is useful?",
    "options": [
      "SUM(Region[Name])",
      "COUNTROWS(Region[Name])",
      "USERELATIONSHIP(Region[Name])",
      "SELECTEDVALUE(Region[Name], 'Multiple')"
    ],
    "answer": [
      3
    ],
    "explanation": "SELECTEDVALUE returns the single value in context or an alternate result when there is not exactly one distinct value."
  },
  {
    "id": "model-110",
    "domain": "Model the data",
    "topic": "SELECTEDVALUE",
    "type": "single",
    "question": "Scenario: A service operations model. A measure should return the one selected region when exactly one region is in context, otherwise 'Multiple'. Which function is useful?",
    "options": [
      "COUNTROWS(Region[Name])",
      "USERELATIONSHIP(Region[Name])",
      "SELECTEDVALUE(Region[Name], 'Multiple')",
      "SUM(Region[Name])"
    ],
    "answer": [
      2
    ],
    "explanation": "SELECTEDVALUE returns the single value in context or an alternate result when there is not exactly one distinct value."
  },
  {
    "id": "model-111",
    "domain": "Model the data",
    "topic": "SELECTEDVALUE",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? A measure should return the one selected region when exactly one region is in context, otherwise 'Multiple'. Which function is useful?",
    "options": [
      "USERELATIONSHIP(Region[Name])",
      "SELECTEDVALUE(Region[Name], 'Multiple')",
      "SUM(Region[Name])",
      "COUNTROWS(Region[Name])"
    ],
    "answer": [
      1
    ],
    "explanation": "SELECTEDVALUE returns the single value in context or an alternate result when there is not exactly one distinct value."
  },
  {
    "id": "model-112",
    "domain": "Model the data",
    "topic": "SELECTEDVALUE",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: a measure should return the one selected region when exactly one region is in context, otherwise 'Multiple'. Which function is useful?",
    "options": [
      "SELECTEDVALUE(Region[Name], 'Multiple')",
      "SUM(Region[Name])",
      "COUNTROWS(Region[Name])",
      "USERELATIONSHIP(Region[Name])"
    ],
    "answer": [
      0
    ],
    "explanation": "SELECTEDVALUE returns the single value in context or an alternate result when there is not exactly one distinct value."
  },
  {
    "id": "model-113",
    "domain": "Model the data",
    "topic": "BLANK handling",
    "type": "single",
    "question": "While working with a service operations model, why should DAX authors distinguish BLANK from zero?",
    "options": [
      "They can have different business meanings and affect visuals and calculations differently",
      "BLANK is always equal to every number",
      "Zero cannot be shown in a visual",
      "BLANK disables all filters"
    ],
    "answer": [
      0
    ],
    "explanation": "Blank often means missing or not applicable, whereas zero is a numeric result; the choice affects display and logic."
  },
  {
    "id": "model-114",
    "domain": "Model the data",
    "topic": "BLANK handling",
    "type": "single",
    "question": "Scenario: A product analytics dataset. Why should DAX authors distinguish BLANK from zero?",
    "options": [
      "BLANK is always equal to every number",
      "Zero cannot be shown in a visual",
      "BLANK disables all filters",
      "They can have different business meanings and affect visuals and calculations differently"
    ],
    "answer": [
      3
    ],
    "explanation": "Blank often means missing or not applicable, whereas zero is a numeric result; the choice affects display and logic."
  },
  {
    "id": "model-115",
    "domain": "Model the data",
    "topic": "BLANK handling",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? Why should DAX authors distinguish BLANK from zero?",
    "options": [
      "Zero cannot be shown in a visual",
      "BLANK disables all filters",
      "They can have different business meanings and affect visuals and calculations differently",
      "BLANK is always equal to every number"
    ],
    "answer": [
      2
    ],
    "explanation": "Blank often means missing or not applicable, whereas zero is a numeric result; the choice affects display and logic."
  },
  {
    "id": "model-116",
    "domain": "Model the data",
    "topic": "BLANK handling",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: why should DAX authors distinguish BLANK from zero?",
    "options": [
      "BLANK disables all filters",
      "They can have different business meanings and affect visuals and calculations differently",
      "BLANK is always equal to every number",
      "Zero cannot be shown in a visual"
    ],
    "answer": [
      1
    ],
    "explanation": "Blank often means missing or not applicable, whereas zero is a numeric result; the choice affects display and logic."
  },
  {
    "id": "model-117",
    "domain": "Model the data",
    "topic": "DAX measure format",
    "type": "single",
    "question": "While working with a product analytics dataset, for a percentage measure, which is generally preferable to multiplying by 100 and adding a percent sign as text?",
    "options": [
      "Use a bookmark",
      "Return a numeric ratio and set its format to Percentage",
      "Use FORMAT for every numeric measure",
      "Store the result in a text column"
    ],
    "answer": [
      1
    ],
    "explanation": "Numeric measures retain numeric behavior for sorting and visuals; model formatting controls the displayed percentage."
  },
  {
    "id": "model-118",
    "domain": "Model the data",
    "topic": "DAX measure format",
    "type": "single",
    "question": "Scenario: A sales semantic model. For a percentage measure, which is generally preferable to multiplying by 100 and adding a percent sign as text?",
    "options": [
      "Return a numeric ratio and set its format to Percentage",
      "Use FORMAT for every numeric measure",
      "Store the result in a text column",
      "Use a bookmark"
    ],
    "answer": [
      0
    ],
    "explanation": "Numeric measures retain numeric behavior for sorting and visuals; model formatting controls the displayed percentage."
  },
  {
    "id": "model-119",
    "domain": "Model the data",
    "topic": "DAX measure format",
    "type": "single",
    "question": "For a customer profitability report, which action is most appropriate? For a percentage measure, which is generally preferable to multiplying by 100 and adding a percent sign as text?",
    "options": [
      "Use FORMAT for every numeric measure",
      "Store the result in a text column",
      "Use a bookmark",
      "Return a numeric ratio and set its format to Percentage"
    ],
    "answer": [
      3
    ],
    "explanation": "Numeric measures retain numeric behavior for sorting and visuals; model formatting controls the displayed percentage."
  },
  {
    "id": "model-120",
    "domain": "Model the data",
    "topic": "DAX measure format",
    "type": "single",
    "question": "A team maintaining a finance star schema asks: for a percentage measure, which is generally preferable to multiplying by 100 and adding a percent sign as text?",
    "options": [
      "Store the result in a text column",
      "Use a bookmark",
      "Return a numeric ratio and set its format to Percentage",
      "Use FORMAT for every numeric measure"
    ],
    "answer": [
      2
    ],
    "explanation": "Numeric measures retain numeric behavior for sorting and visuals; model formatting controls the displayed percentage."
  },
  {
    "id": "model-121",
    "domain": "Model the data",
    "topic": "Calculation groups",
    "type": "single",
    "question": "While working with a sales semantic model, what is a common benefit of calculation groups in advanced semantic models?",
    "options": [
      "Automatically clean source data",
      "Grant access to workspaces",
      "Apply reusable calculation logic such as time-intelligence transformations across many measures",
      "Replace the need for a date table in every scenario"
    ],
    "answer": [
      2
    ],
    "explanation": "Calculation groups can reduce repeated measures by applying reusable calculation items to selected measures."
  },
  {
    "id": "model-122",
    "domain": "Model the data",
    "topic": "Calculation groups",
    "type": "single",
    "question": "Scenario: A customer profitability report. What is a common benefit of calculation groups in advanced semantic models?",
    "options": [
      "Grant access to workspaces",
      "Apply reusable calculation logic such as time-intelligence transformations across many measures",
      "Replace the need for a date table in every scenario",
      "Automatically clean source data"
    ],
    "answer": [
      1
    ],
    "explanation": "Calculation groups can reduce repeated measures by applying reusable calculation items to selected measures."
  },
  {
    "id": "model-123",
    "domain": "Model the data",
    "topic": "Calculation groups",
    "type": "single",
    "question": "For a finance star schema, which action is most appropriate? What is a common benefit of calculation groups in advanced semantic models?",
    "options": [
      "Apply reusable calculation logic such as time-intelligence transformations across many measures",
      "Replace the need for a date table in every scenario",
      "Automatically clean source data",
      "Grant access to workspaces"
    ],
    "answer": [
      0
    ],
    "explanation": "Calculation groups can reduce repeated measures by applying reusable calculation items to selected measures."
  },
  {
    "id": "model-124",
    "domain": "Model the data",
    "topic": "Calculation groups",
    "type": "single",
    "question": "A team maintaining a service operations model asks: what is a common benefit of calculation groups in advanced semantic models?",
    "options": [
      "Replace the need for a date table in every scenario",
      "Automatically clean source data",
      "Grant access to workspaces",
      "Apply reusable calculation logic such as time-intelligence transformations across many measures"
    ],
    "answer": [
      3
    ],
    "explanation": "Calculation groups can reduce repeated measures by applying reusable calculation items to selected measures."
  },
  {
    "id": "model-125",
    "domain": "Model the data",
    "topic": "DAX performance",
    "type": "single",
    "question": "While working with a customer profitability report, a measure repeatedly computes the same expensive expression. What can improve clarity and potentially reduce repeated work?",
    "options": [
      "Wrap every result in FORMAT",
      "Add bidirectional relationships everywhere",
      "Duplicate the fact table for every visual",
      "Define the expression once in a VAR and reuse it"
    ],
    "answer": [
      3
    ],
    "explanation": "Variables can improve readability and can prevent repeated evaluation of equivalent subexpressions."
  },
  {
    "id": "model-126",
    "domain": "Model the data",
    "topic": "DAX performance",
    "type": "single",
    "question": "Scenario: A finance star schema. A measure repeatedly computes the same expensive expression. What can improve clarity and potentially reduce repeated work?",
    "options": [
      "Add bidirectional relationships everywhere",
      "Duplicate the fact table for every visual",
      "Define the expression once in a VAR and reuse it",
      "Wrap every result in FORMAT"
    ],
    "answer": [
      2
    ],
    "explanation": "Variables can improve readability and can prevent repeated evaluation of equivalent subexpressions."
  },
  {
    "id": "model-127",
    "domain": "Model the data",
    "topic": "DAX performance",
    "type": "single",
    "question": "For a service operations model, which action is most appropriate? A measure repeatedly computes the same expensive expression. What can improve clarity and potentially reduce repeated work?",
    "options": [
      "Duplicate the fact table for every visual",
      "Define the expression once in a VAR and reuse it",
      "Wrap every result in FORMAT",
      "Add bidirectional relationships everywhere"
    ],
    "answer": [
      1
    ],
    "explanation": "Variables can improve readability and can prevent repeated evaluation of equivalent subexpressions."
  },
  {
    "id": "model-128",
    "domain": "Model the data",
    "topic": "DAX performance",
    "type": "single",
    "question": "A team maintaining a product analytics dataset asks: a measure repeatedly computes the same expensive expression. What can improve clarity and potentially reduce repeated work?",
    "options": [
      "Define the expression once in a VAR and reuse it",
      "Wrap every result in FORMAT",
      "Add bidirectional relationships everywhere",
      "Duplicate the fact table for every visual"
    ],
    "answer": [
      0
    ],
    "explanation": "Variables can improve readability and can prevent repeated evaluation of equivalent subexpressions."
  },
  {
    "id": "model-129",
    "domain": "Model the data",
    "topic": "Star schema dimensions",
    "type": "single",
    "question": "While working with a finance star schema, why are descriptive attributes usually stored in dimension tables rather than repeated on every fact row?",
    "options": [
      "They reduce redundancy and support clearer filtering and grouping",
      "They force all measures to become calculated columns",
      "They prevent slicers from working",
      "They eliminate the need for keys"
    ],
    "answer": [
      0
    ],
    "explanation": "Dimensions hold descriptive attributes; facts hold events and measures at a defined grain."
  },
  {
    "id": "model-130",
    "domain": "Model the data",
    "topic": "Star schema dimensions",
    "type": "single",
    "question": "Scenario: A service operations model. Why are descriptive attributes usually stored in dimension tables rather than repeated on every fact row?",
    "options": [
      "They force all measures to become calculated columns",
      "They prevent slicers from working",
      "They eliminate the need for keys",
      "They reduce redundancy and support clearer filtering and grouping"
    ],
    "answer": [
      3
    ],
    "explanation": "Dimensions hold descriptive attributes; facts hold events and measures at a defined grain."
  },
  {
    "id": "model-131",
    "domain": "Model the data",
    "topic": "Star schema dimensions",
    "type": "single",
    "question": "For a product analytics dataset, which action is most appropriate? Why are descriptive attributes usually stored in dimension tables rather than repeated on every fact row?",
    "options": [
      "They prevent slicers from working",
      "They eliminate the need for keys",
      "They reduce redundancy and support clearer filtering and grouping",
      "They force all measures to become calculated columns"
    ],
    "answer": [
      2
    ],
    "explanation": "Dimensions hold descriptive attributes; facts hold events and measures at a defined grain."
  },
  {
    "id": "model-132",
    "domain": "Model the data",
    "topic": "Star schema dimensions",
    "type": "single",
    "question": "A team maintaining a sales semantic model asks: why are descriptive attributes usually stored in dimension tables rather than repeated on every fact row?",
    "options": [
      "They eliminate the need for keys",
      "They reduce redundancy and support clearer filtering and grouping",
      "They force all measures to become calculated columns",
      "They prevent slicers from working"
    ],
    "answer": [
      1
    ],
    "explanation": "Dimensions hold descriptive attributes; facts hold events and measures at a defined grain."
  },
  {
    "id": "model-133",
    "domain": "Model the data",
    "topic": "Many-to-many",
    "type": "single",
    "question": "While working with a service operations model, when a genuine many-to-many business relationship exists, what should you do before choosing a direct many-to-many relationship?",
    "options": [
      "Convert both tables to images",
      "Evaluate a bridge-table design, grain, and filter propagation requirements",
      "Always enable bidirectional filtering everywhere",
      "Remove all keys"
    ],
    "answer": [
      1
    ],
    "explanation": "Bridge tables and carefully designed relationships often make many-to-many behavior more explicit and controllable."
  },
  {
    "id": "model-134",
    "domain": "Model the data",
    "topic": "Many-to-many",
    "type": "single",
    "question": "Scenario: A product analytics dataset. When a genuine many-to-many business relationship exists, what should you do before choosing a direct many-to-many relationship?",
    "options": [
      "Evaluate a bridge-table design, grain, and filter propagation requirements",
      "Always enable bidirectional filtering everywhere",
      "Remove all keys",
      "Convert both tables to images"
    ],
    "answer": [
      0
    ],
    "explanation": "Bridge tables and carefully designed relationships often make many-to-many behavior more explicit and controllable."
  },
  {
    "id": "model-135",
    "domain": "Model the data",
    "topic": "Many-to-many",
    "type": "single",
    "question": "For a sales semantic model, which action is most appropriate? When a genuine many-to-many business relationship exists, what should you do before choosing a direct many-to-many relationship?",
    "options": [
      "Always enable bidirectional filtering everywhere",
      "Remove all keys",
      "Convert both tables to images",
      "Evaluate a bridge-table design, grain, and filter propagation requirements"
    ],
    "answer": [
      3
    ],
    "explanation": "Bridge tables and carefully designed relationships often make many-to-many behavior more explicit and controllable."
  },
  {
    "id": "model-136",
    "domain": "Model the data",
    "topic": "Many-to-many",
    "type": "single",
    "question": "A team maintaining a customer profitability report asks: when a genuine many-to-many business relationship exists, what should you do before choosing a direct many-to-many relationship?",
    "options": [
      "Remove all keys",
      "Convert both tables to images",
      "Evaluate a bridge-table design, grain, and filter propagation requirements",
      "Always enable bidirectional filtering everywhere"
    ],
    "answer": [
      2
    ],
    "explanation": "Bridge tables and carefully designed relationships often make many-to-many behavior more explicit and controllable."
  },
  {
    "id": "model-137",
    "domain": "Model the data",
    "topic": "Star schema",
    "type": "single",
    "question": "Knowledge check (Star schema) — A finance star schema: select the best answer. Which design usually makes a Power BI semantic model easier to understand and query?",
    "options": [
      "One giant table with every attribute duplicated",
      "A circular network of bidirectional relationships",
      "No relationships at all",
      "A star schema with dimensions filtering a fact table"
    ],
    "answer": [
      3
    ],
    "explanation": "A star schema separates descriptive dimensions from measurable facts and usually simplifies filter propagation."
  },
  {
    "id": "model-138",
    "domain": "Model the data",
    "topic": "Fact grain",
    "type": "single",
    "question": "Knowledge check (Fact grain) — A service operations model: select the best answer. Before designing a fact table, what should you define explicitly?",
    "options": [
      "The workspace description",
      "The number of bookmarks",
      "The grain: what one row represents",
      "The report background color"
    ],
    "answer": [
      2
    ],
    "explanation": "A clear grain prevents mixing incompatible levels of detail and helps define keys and measures."
  },
  {
    "id": "model-139",
    "domain": "Model the data",
    "topic": "Dimension key",
    "type": "single",
    "question": "Knowledge check (Dimension key) — A product analytics dataset: select the best answer. Which condition should generally hold for the key on the 'one' side of a one-to-many relationship?",
    "options": [
      "It must be a decimal measure",
      "It is unique for each dimension row",
      "It is blank on every row",
      "It repeats for every transaction"
    ],
    "answer": [
      1
    ],
    "explanation": "The one-side key must identify a unique dimension member."
  },
  {
    "id": "model-140",
    "domain": "Model the data",
    "topic": "Relationship direction",
    "type": "single",
    "question": "Knowledge check (Relationship direction) — A sales semantic model: select the best answer. What is the usual starting point for cross-filter direction in a simple star schema?",
    "options": [
      "Single direction from dimension to fact",
      "Bidirectional on every relationship",
      "No filtering in either direction",
      "Random direction per report page"
    ],
    "answer": [
      0
    ],
    "explanation": "Single-direction dimension-to-fact filtering is predictable and reduces ambiguity in many star schemas."
  },
  {
    "id": "visual-001",
    "domain": "Visualize and analyze the data",
    "topic": "Bar chart",
    "type": "single",
    "question": "While working with an executive dashboard, which visual is usually effective for comparing values across categories?",
    "options": [
      "Bar or column chart",
      "Gauge for every category",
      "A decorative image",
      "A single text box"
    ],
    "answer": [
      0
    ],
    "explanation": "Bar and column charts support clear comparisons across categorical values."
  },
  {
    "id": "visual-002",
    "domain": "Visualize and analyze the data",
    "topic": "Bar chart",
    "type": "single",
    "question": "Scenario: A regional performance report. Which visual is usually effective for comparing values across categories?",
    "options": [
      "Gauge for every category",
      "A decorative image",
      "A single text box",
      "Bar or column chart"
    ],
    "answer": [
      3
    ],
    "explanation": "Bar and column charts support clear comparisons across categorical values."
  },
  {
    "id": "visual-003",
    "domain": "Visualize and analyze the data",
    "topic": "Bar chart",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? Which visual is usually effective for comparing values across categories?",
    "options": [
      "A decorative image",
      "A single text box",
      "Bar or column chart",
      "Gauge for every category"
    ],
    "answer": [
      2
    ],
    "explanation": "Bar and column charts support clear comparisons across categorical values."
  },
  {
    "id": "visual-004",
    "domain": "Visualize and analyze the data",
    "topic": "Bar chart",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: which visual is usually effective for comparing values across categories?",
    "options": [
      "A single text box",
      "Bar or column chart",
      "Gauge for every category",
      "A decorative image"
    ],
    "answer": [
      1
    ],
    "explanation": "Bar and column charts support clear comparisons across categorical values."
  },
  {
    "id": "visual-005",
    "domain": "Visualize and analyze the data",
    "topic": "Line chart",
    "type": "single",
    "question": "While working with a regional performance report, which visual is usually a good choice for showing a measure over time?",
    "options": [
      "Slicer without a field",
      "Line chart",
      "Treemap only",
      "Card only"
    ],
    "answer": [
      1
    ],
    "explanation": "Line charts emphasize trends and changes across an ordered time axis."
  },
  {
    "id": "visual-006",
    "domain": "Visualize and analyze the data",
    "topic": "Line chart",
    "type": "single",
    "question": "Scenario: A customer analytics report. Which visual is usually a good choice for showing a measure over time?",
    "options": [
      "Line chart",
      "Treemap only",
      "Card only",
      "Slicer without a field"
    ],
    "answer": [
      0
    ],
    "explanation": "Line charts emphasize trends and changes across an ordered time axis."
  },
  {
    "id": "visual-007",
    "domain": "Visualize and analyze the data",
    "topic": "Line chart",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? Which visual is usually a good choice for showing a measure over time?",
    "options": [
      "Treemap only",
      "Card only",
      "Slicer without a field",
      "Line chart"
    ],
    "answer": [
      3
    ],
    "explanation": "Line charts emphasize trends and changes across an ordered time axis."
  },
  {
    "id": "visual-008",
    "domain": "Visualize and analyze the data",
    "topic": "Line chart",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: which visual is usually a good choice for showing a measure over time?",
    "options": [
      "Card only",
      "Slicer without a field",
      "Line chart",
      "Treemap only"
    ],
    "answer": [
      2
    ],
    "explanation": "Line charts emphasize trends and changes across an ordered time axis."
  },
  {
    "id": "visual-009",
    "domain": "Visualize and analyze the data",
    "topic": "KPI card",
    "type": "single",
    "question": "While working with a customer analytics report, a report needs to show one important current value, such as total revenue. Which visual is suitable?",
    "options": [
      "Shape",
      "Page navigator only",
      "Card visual",
      "Decomposition tree only"
    ],
    "answer": [
      2
    ],
    "explanation": "A card highlights a single key metric; supporting context may be needed to explain comparisons or trends."
  },
  {
    "id": "visual-010",
    "domain": "Visualize and analyze the data",
    "topic": "KPI card",
    "type": "single",
    "question": "Scenario: A monthly finance dashboard. A report needs to show one important current value, such as total revenue. Which visual is suitable?",
    "options": [
      "Page navigator only",
      "Card visual",
      "Decomposition tree only",
      "Shape"
    ],
    "answer": [
      1
    ],
    "explanation": "A card highlights a single key metric; supporting context may be needed to explain comparisons or trends."
  },
  {
    "id": "visual-011",
    "domain": "Visualize and analyze the data",
    "topic": "KPI card",
    "type": "single",
    "question": "For an operations monitoring report, which action is most appropriate? A report needs to show one important current value, such as total revenue. Which visual is suitable?",
    "options": [
      "Card visual",
      "Decomposition tree only",
      "Shape",
      "Page navigator only"
    ],
    "answer": [
      0
    ],
    "explanation": "A card highlights a single key metric; supporting context may be needed to explain comparisons or trends."
  },
  {
    "id": "visual-012",
    "domain": "Visualize and analyze the data",
    "topic": "KPI card",
    "type": "single",
    "question": "A team maintaining an executive dashboard asks: a report needs to show one important current value, such as total revenue. Which visual is suitable?",
    "options": [
      "Decomposition tree only",
      "Shape",
      "Page navigator only",
      "Card visual"
    ],
    "answer": [
      3
    ],
    "explanation": "A card highlights a single key metric; supporting context may be needed to explain comparisons or trends."
  },
  {
    "id": "visual-013",
    "domain": "Visualize and analyze the data",
    "topic": "Slicer",
    "type": "single",
    "question": "While working with a monthly finance dashboard, what is the main purpose of a slicer?",
    "options": [
      "Refresh the source database",
      "Create a new relationship",
      "Define workspace permissions",
      "Let report consumers filter data interactively"
    ],
    "answer": [
      3
    ],
    "explanation": "Slicers expose interactive filters directly on the report canvas."
  },
  {
    "id": "visual-014",
    "domain": "Visualize and analyze the data",
    "topic": "Slicer",
    "type": "single",
    "question": "Scenario: An operations monitoring report. What is the main purpose of a slicer?",
    "options": [
      "Create a new relationship",
      "Define workspace permissions",
      "Let report consumers filter data interactively",
      "Refresh the source database"
    ],
    "answer": [
      2
    ],
    "explanation": "Slicers expose interactive filters directly on the report canvas."
  },
  {
    "id": "visual-015",
    "domain": "Visualize and analyze the data",
    "topic": "Slicer",
    "type": "single",
    "question": "For an executive dashboard, which action is most appropriate? What is the main purpose of a slicer?",
    "options": [
      "Define workspace permissions",
      "Let report consumers filter data interactively",
      "Refresh the source database",
      "Create a new relationship"
    ],
    "answer": [
      1
    ],
    "explanation": "Slicers expose interactive filters directly on the report canvas."
  },
  {
    "id": "visual-016",
    "domain": "Visualize and analyze the data",
    "topic": "Slicer",
    "type": "single",
    "question": "A team maintaining a regional performance report asks: what is the main purpose of a slicer?",
    "options": [
      "Let report consumers filter data interactively",
      "Refresh the source database",
      "Create a new relationship",
      "Define workspace permissions"
    ],
    "answer": [
      0
    ],
    "explanation": "Slicers expose interactive filters directly on the report canvas."
  },
  {
    "id": "visual-017",
    "domain": "Visualize and analyze the data",
    "topic": "Drill down",
    "type": "single",
    "question": "While working with an operations monitoring report, a hierarchy contains Year, Quarter, Month, and Day. What lets a user move from a summary level to lower levels in a visual?",
    "options": [
      "Drill down",
      "Row-level security",
      "Query folding",
      "Data source credentials"
    ],
    "answer": [
      0
    ],
    "explanation": "Drill-down navigates within a hierarchy in a visual."
  },
  {
    "id": "visual-018",
    "domain": "Visualize and analyze the data",
    "topic": "Drill down",
    "type": "single",
    "question": "Scenario: An executive dashboard. A hierarchy contains Year, Quarter, Month, and Day. What lets a user move from a summary level to lower levels in a visual?",
    "options": [
      "Row-level security",
      "Query folding",
      "Data source credentials",
      "Drill down"
    ],
    "answer": [
      3
    ],
    "explanation": "Drill-down navigates within a hierarchy in a visual."
  },
  {
    "id": "visual-019",
    "domain": "Visualize and analyze the data",
    "topic": "Drill down",
    "type": "single",
    "question": "For a regional performance report, which action is most appropriate? A hierarchy contains Year, Quarter, Month, and Day. What lets a user move from a summary level to lower levels in a visual?",
    "options": [
      "Query folding",
      "Data source credentials",
      "Drill down",
      "Row-level security"
    ],
    "answer": [
      2
    ],
    "explanation": "Drill-down navigates within a hierarchy in a visual."
  },
  {
    "id": "visual-020",
    "domain": "Visualize and analyze the data",
    "topic": "Drill down",
    "type": "single",
    "question": "A team maintaining a customer analytics report asks: a hierarchy contains Year, Quarter, Month, and Day. What lets a user move from a summary level to lower levels in a visual?",
    "options": [
      "Data source credentials",
      "Drill down",
      "Row-level security",
      "Query folding"
    ],
    "answer": [
      1
    ],
    "explanation": "Drill-down navigates within a hierarchy in a visual."
  },
  {
    "id": "visual-021",
    "domain": "Visualize and analyze the data",
    "topic": "Drillthrough",
    "type": "single",
    "question": "While working with an executive dashboard, you want a user to right-click a customer and open a detail page filtered to that customer. Which feature fits?",
    "options": [
      "Workspace admin role",
      "Drillthrough page",
      "Dataflow refresh",
      "Incremental refresh"
    ],
    "answer": [
      1
    ],
    "explanation": "Drillthrough passes selected data context to a target detail page."
  },
  {
    "id": "visual-022",
    "domain": "Visualize and analyze the data",
    "topic": "Drillthrough",
    "type": "single",
    "question": "Scenario: A regional performance report. You want a user to right-click a customer and open a detail page filtered to that customer. Which feature fits?",
    "options": [
      "Drillthrough page",
      "Dataflow refresh",
      "Incremental refresh",
      "Workspace admin role"
    ],
    "answer": [
      0
    ],
    "explanation": "Drillthrough passes selected data context to a target detail page."
  },
  {
    "id": "visual-023",
    "domain": "Visualize and analyze the data",
    "topic": "Drillthrough",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? You want a user to right-click a customer and open a detail page filtered to that customer. Which feature fits?",
    "options": [
      "Dataflow refresh",
      "Incremental refresh",
      "Workspace admin role",
      "Drillthrough page"
    ],
    "answer": [
      3
    ],
    "explanation": "Drillthrough passes selected data context to a target detail page."
  },
  {
    "id": "visual-024",
    "domain": "Visualize and analyze the data",
    "topic": "Drillthrough",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: you want a user to right-click a customer and open a detail page filtered to that customer. Which feature fits?",
    "options": [
      "Incremental refresh",
      "Workspace admin role",
      "Drillthrough page",
      "Dataflow refresh"
    ],
    "answer": [
      2
    ],
    "explanation": "Drillthrough passes selected data context to a target detail page."
  },
  {
    "id": "visual-025",
    "domain": "Visualize and analyze the data",
    "topic": "Tooltip page",
    "type": "single",
    "question": "While working with a regional performance report, you need a custom hover panel with additional visuals for a data point. Which feature is designed for this?",
    "options": [
      "DAX calculated table",
      "Sensitivity label only",
      "Report page tooltip",
      "Gateway cluster"
    ],
    "answer": [
      2
    ],
    "explanation": "A report page tooltip can show contextual details when hovering over supported visuals."
  },
  {
    "id": "visual-026",
    "domain": "Visualize and analyze the data",
    "topic": "Tooltip page",
    "type": "single",
    "question": "Scenario: A customer analytics report. You need a custom hover panel with additional visuals for a data point. Which feature is designed for this?",
    "options": [
      "Sensitivity label only",
      "Report page tooltip",
      "Gateway cluster",
      "DAX calculated table"
    ],
    "answer": [
      1
    ],
    "explanation": "A report page tooltip can show contextual details when hovering over supported visuals."
  },
  {
    "id": "visual-027",
    "domain": "Visualize and analyze the data",
    "topic": "Tooltip page",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? You need a custom hover panel with additional visuals for a data point. Which feature is designed for this?",
    "options": [
      "Report page tooltip",
      "Gateway cluster",
      "DAX calculated table",
      "Sensitivity label only"
    ],
    "answer": [
      0
    ],
    "explanation": "A report page tooltip can show contextual details when hovering over supported visuals."
  },
  {
    "id": "visual-028",
    "domain": "Visualize and analyze the data",
    "topic": "Tooltip page",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: you need a custom hover panel with additional visuals for a data point. Which feature is designed for this?",
    "options": [
      "Gateway cluster",
      "DAX calculated table",
      "Sensitivity label only",
      "Report page tooltip"
    ],
    "answer": [
      3
    ],
    "explanation": "A report page tooltip can show contextual details when hovering over supported visuals."
  },
  {
    "id": "visual-029",
    "domain": "Visualize and analyze the data",
    "topic": "Bookmarks",
    "type": "single",
    "question": "While working with a customer analytics report, what can a bookmark capture for guided report navigation or alternate views?",
    "options": [
      "A copy of the source database",
      "A DAX formula's compiled binary",
      "A user's password",
      "A saved state of report pages, visuals, and selected display/filter settings according to its options"
    ],
    "answer": [
      3
    ],
    "explanation": "Bookmarks capture configured report state and can support storytelling and navigation."
  },
  {
    "id": "visual-030",
    "domain": "Visualize and analyze the data",
    "topic": "Bookmarks",
    "type": "single",
    "question": "Scenario: A monthly finance dashboard. What can a bookmark capture for guided report navigation or alternate views?",
    "options": [
      "A DAX formula's compiled binary",
      "A user's password",
      "A saved state of report pages, visuals, and selected display/filter settings according to its options",
      "A copy of the source database"
    ],
    "answer": [
      2
    ],
    "explanation": "Bookmarks capture configured report state and can support storytelling and navigation."
  },
  {
    "id": "visual-031",
    "domain": "Visualize and analyze the data",
    "topic": "Bookmarks",
    "type": "single",
    "question": "For an operations monitoring report, which action is most appropriate? What can a bookmark capture for guided report navigation or alternate views?",
    "options": [
      "A user's password",
      "A saved state of report pages, visuals, and selected display/filter settings according to its options",
      "A copy of the source database",
      "A DAX formula's compiled binary"
    ],
    "answer": [
      1
    ],
    "explanation": "Bookmarks capture configured report state and can support storytelling and navigation."
  },
  {
    "id": "visual-032",
    "domain": "Visualize and analyze the data",
    "topic": "Bookmarks",
    "type": "single",
    "question": "A team maintaining an executive dashboard asks: what can a bookmark capture for guided report navigation or alternate views?",
    "options": [
      "A saved state of report pages, visuals, and selected display/filter settings according to its options",
      "A copy of the source database",
      "A DAX formula's compiled binary",
      "A user's password"
    ],
    "answer": [
      0
    ],
    "explanation": "Bookmarks capture configured report state and can support storytelling and navigation."
  },
  {
    "id": "visual-033",
    "domain": "Visualize and analyze the data",
    "topic": "Selection pane",
    "type": "single",
    "question": "While working with a monthly finance dashboard, which pane helps manage visual visibility and layering for bookmark-based views?",
    "options": [
      "Selection pane",
      "Gateway settings",
      "Data source credentials",
      "Refresh history only"
    ],
    "answer": [
      0
    ],
    "explanation": "The Selection pane manages visual order and visibility, often alongside bookmarks."
  },
  {
    "id": "visual-034",
    "domain": "Visualize and analyze the data",
    "topic": "Selection pane",
    "type": "single",
    "question": "Scenario: An operations monitoring report. Which pane helps manage visual visibility and layering for bookmark-based views?",
    "options": [
      "Gateway settings",
      "Data source credentials",
      "Refresh history only",
      "Selection pane"
    ],
    "answer": [
      3
    ],
    "explanation": "The Selection pane manages visual order and visibility, often alongside bookmarks."
  },
  {
    "id": "visual-035",
    "domain": "Visualize and analyze the data",
    "topic": "Selection pane",
    "type": "single",
    "question": "For an executive dashboard, which action is most appropriate? Which pane helps manage visual visibility and layering for bookmark-based views?",
    "options": [
      "Data source credentials",
      "Refresh history only",
      "Selection pane",
      "Gateway settings"
    ],
    "answer": [
      2
    ],
    "explanation": "The Selection pane manages visual order and visibility, often alongside bookmarks."
  },
  {
    "id": "visual-036",
    "domain": "Visualize and analyze the data",
    "topic": "Selection pane",
    "type": "single",
    "question": "A team maintaining a regional performance report asks: which pane helps manage visual visibility and layering for bookmark-based views?",
    "options": [
      "Refresh history only",
      "Selection pane",
      "Gateway settings",
      "Data source credentials"
    ],
    "answer": [
      1
    ],
    "explanation": "The Selection pane manages visual order and visibility, often alongside bookmarks."
  },
  {
    "id": "visual-037",
    "domain": "Visualize and analyze the data",
    "topic": "Edit interactions",
    "type": "single",
    "question": "While working with an operations monitoring report, a slicer should filter one chart but not affect another. What should you configure?",
    "options": [
      "A calculated table",
      "Edit interactions",
      "Incremental refresh",
      "A new workspace"
    ],
    "answer": [
      1
    ],
    "explanation": "Edit interactions controls how a selected visual affects other visuals on the page."
  },
  {
    "id": "visual-038",
    "domain": "Visualize and analyze the data",
    "topic": "Edit interactions",
    "type": "single",
    "question": "Scenario: An executive dashboard. A slicer should filter one chart but not affect another. What should you configure?",
    "options": [
      "Edit interactions",
      "Incremental refresh",
      "A new workspace",
      "A calculated table"
    ],
    "answer": [
      0
    ],
    "explanation": "Edit interactions controls how a selected visual affects other visuals on the page."
  },
  {
    "id": "visual-039",
    "domain": "Visualize and analyze the data",
    "topic": "Edit interactions",
    "type": "single",
    "question": "For a regional performance report, which action is most appropriate? A slicer should filter one chart but not affect another. What should you configure?",
    "options": [
      "Incremental refresh",
      "A new workspace",
      "A calculated table",
      "Edit interactions"
    ],
    "answer": [
      3
    ],
    "explanation": "Edit interactions controls how a selected visual affects other visuals on the page."
  },
  {
    "id": "visual-040",
    "domain": "Visualize and analyze the data",
    "topic": "Edit interactions",
    "type": "single",
    "question": "A team maintaining a customer analytics report asks: a slicer should filter one chart but not affect another. What should you configure?",
    "options": [
      "A new workspace",
      "A calculated table",
      "Edit interactions",
      "Incremental refresh"
    ],
    "answer": [
      2
    ],
    "explanation": "Edit interactions controls how a selected visual affects other visuals on the page."
  },
  {
    "id": "visual-041",
    "domain": "Visualize and analyze the data",
    "topic": "Conditional formatting",
    "type": "single",
    "question": "While working with an executive dashboard, you want negative profit values to appear red and positive values green. What feature is appropriate?",
    "options": [
      "Append queries",
      "RLS",
      "Conditional formatting",
      "Data gateway"
    ],
    "answer": [
      2
    ],
    "explanation": "Conditional formatting changes visual appearance based on values or rules."
  },
  {
    "id": "visual-042",
    "domain": "Visualize and analyze the data",
    "topic": "Conditional formatting",
    "type": "single",
    "question": "Scenario: A regional performance report. You want negative profit values to appear red and positive values green. What feature is appropriate?",
    "options": [
      "RLS",
      "Conditional formatting",
      "Data gateway",
      "Append queries"
    ],
    "answer": [
      1
    ],
    "explanation": "Conditional formatting changes visual appearance based on values or rules."
  },
  {
    "id": "visual-043",
    "domain": "Visualize and analyze the data",
    "topic": "Conditional formatting",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? You want negative profit values to appear red and positive values green. What feature is appropriate?",
    "options": [
      "Conditional formatting",
      "Data gateway",
      "Append queries",
      "RLS"
    ],
    "answer": [
      0
    ],
    "explanation": "Conditional formatting changes visual appearance based on values or rules."
  },
  {
    "id": "visual-044",
    "domain": "Visualize and analyze the data",
    "topic": "Conditional formatting",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: you want negative profit values to appear red and positive values green. What feature is appropriate?",
    "options": [
      "Data gateway",
      "Append queries",
      "RLS",
      "Conditional formatting"
    ],
    "answer": [
      3
    ],
    "explanation": "Conditional formatting changes visual appearance based on values or rules."
  },
  {
    "id": "visual-045",
    "domain": "Visualize and analyze the data",
    "topic": "Sort by column",
    "type": "single",
    "question": "While working with a regional performance report, month names appear alphabetically rather than chronologically. What model setting can fix this?",
    "options": [
      "Enable bidirectional filtering",
      "Change the report theme",
      "Use DirectQuery",
      "Sort MonthName by MonthNumber"
    ],
    "answer": [
      3
    ],
    "explanation": "Sort by Column uses a numeric or ordered column to control display order for labels."
  },
  {
    "id": "visual-046",
    "domain": "Visualize and analyze the data",
    "topic": "Sort by column",
    "type": "single",
    "question": "Scenario: A customer analytics report. Month names appear alphabetically rather than chronologically. What model setting can fix this?",
    "options": [
      "Change the report theme",
      "Use DirectQuery",
      "Sort MonthName by MonthNumber",
      "Enable bidirectional filtering"
    ],
    "answer": [
      2
    ],
    "explanation": "Sort by Column uses a numeric or ordered column to control display order for labels."
  },
  {
    "id": "visual-047",
    "domain": "Visualize and analyze the data",
    "topic": "Sort by column",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? Month names appear alphabetically rather than chronologically. What model setting can fix this?",
    "options": [
      "Use DirectQuery",
      "Sort MonthName by MonthNumber",
      "Enable bidirectional filtering",
      "Change the report theme"
    ],
    "answer": [
      1
    ],
    "explanation": "Sort by Column uses a numeric or ordered column to control display order for labels."
  },
  {
    "id": "visual-048",
    "domain": "Visualize and analyze the data",
    "topic": "Sort by column",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: month names appear alphabetically rather than chronologically. What model setting can fix this?",
    "options": [
      "Sort MonthName by MonthNumber",
      "Enable bidirectional filtering",
      "Change the report theme",
      "Use DirectQuery"
    ],
    "answer": [
      0
    ],
    "explanation": "Sort by Column uses a numeric or ordered column to control display order for labels."
  },
  {
    "id": "visual-049",
    "domain": "Visualize and analyze the data",
    "topic": "Small multiples",
    "type": "single",
    "question": "While working with a customer analytics report, you want the same chart repeated for each product region to compare patterns. Which visual capability can help?",
    "options": [
      "Small multiples",
      "A single KPI card",
      "A gateway",
      "A data alert"
    ],
    "answer": [
      0
    ],
    "explanation": "Small multiples create a grid of repeated charts split by a categorical field."
  },
  {
    "id": "visual-050",
    "domain": "Visualize and analyze the data",
    "topic": "Small multiples",
    "type": "single",
    "question": "Scenario: A monthly finance dashboard. You want the same chart repeated for each product region to compare patterns. Which visual capability can help?",
    "options": [
      "A single KPI card",
      "A gateway",
      "A data alert",
      "Small multiples"
    ],
    "answer": [
      3
    ],
    "explanation": "Small multiples create a grid of repeated charts split by a categorical field."
  },
  {
    "id": "visual-051",
    "domain": "Visualize and analyze the data",
    "topic": "Small multiples",
    "type": "single",
    "question": "For an operations monitoring report, which action is most appropriate? You want the same chart repeated for each product region to compare patterns. Which visual capability can help?",
    "options": [
      "A gateway",
      "A data alert",
      "Small multiples",
      "A single KPI card"
    ],
    "answer": [
      2
    ],
    "explanation": "Small multiples create a grid of repeated charts split by a categorical field."
  },
  {
    "id": "visual-052",
    "domain": "Visualize and analyze the data",
    "topic": "Small multiples",
    "type": "single",
    "question": "A team maintaining an executive dashboard asks: you want the same chart repeated for each product region to compare patterns. Which visual capability can help?",
    "options": [
      "A data alert",
      "Small multiples",
      "A single KPI card",
      "A gateway"
    ],
    "answer": [
      1
    ],
    "explanation": "Small multiples create a grid of repeated charts split by a categorical field."
  },
  {
    "id": "visual-053",
    "domain": "Visualize and analyze the data",
    "topic": "Decomposition tree",
    "type": "single",
    "question": "While working with a monthly finance dashboard, which visual supports interactive root-cause exploration by splitting a metric across dimensions?",
    "options": [
      "Button with no action",
      "Decomposition tree",
      "Card only",
      "Text box"
    ],
    "answer": [
      1
    ],
    "explanation": "The decomposition tree lets users explore how a measure breaks down by different dimensions."
  },
  {
    "id": "visual-054",
    "domain": "Visualize and analyze the data",
    "topic": "Decomposition tree",
    "type": "single",
    "question": "Scenario: An operations monitoring report. Which visual supports interactive root-cause exploration by splitting a metric across dimensions?",
    "options": [
      "Decomposition tree",
      "Card only",
      "Text box",
      "Button with no action"
    ],
    "answer": [
      0
    ],
    "explanation": "The decomposition tree lets users explore how a measure breaks down by different dimensions."
  },
  {
    "id": "visual-055",
    "domain": "Visualize and analyze the data",
    "topic": "Decomposition tree",
    "type": "single",
    "question": "For an executive dashboard, which action is most appropriate? Which visual supports interactive root-cause exploration by splitting a metric across dimensions?",
    "options": [
      "Card only",
      "Text box",
      "Button with no action",
      "Decomposition tree"
    ],
    "answer": [
      3
    ],
    "explanation": "The decomposition tree lets users explore how a measure breaks down by different dimensions."
  },
  {
    "id": "visual-056",
    "domain": "Visualize and analyze the data",
    "topic": "Decomposition tree",
    "type": "single",
    "question": "A team maintaining a regional performance report asks: which visual supports interactive root-cause exploration by splitting a metric across dimensions?",
    "options": [
      "Text box",
      "Button with no action",
      "Decomposition tree",
      "Card only"
    ],
    "answer": [
      2
    ],
    "explanation": "The decomposition tree lets users explore how a measure breaks down by different dimensions."
  },
  {
    "id": "visual-057",
    "domain": "Visualize and analyze the data",
    "topic": "Key influencers",
    "type": "single",
    "question": "While working with an operations monitoring report, which visual can help explore factors associated with a selected outcome?",
    "options": [
      "Page navigator",
      "Table of contents",
      "Key influencers",
      "Shape map only"
    ],
    "answer": [
      2
    ],
    "explanation": "The Key influencers visual analyzes factors associated with a metric or category; findings require careful interpretation."
  },
  {
    "id": "visual-058",
    "domain": "Visualize and analyze the data",
    "topic": "Key influencers",
    "type": "single",
    "question": "Scenario: An executive dashboard. Which visual can help explore factors associated with a selected outcome?",
    "options": [
      "Table of contents",
      "Key influencers",
      "Shape map only",
      "Page navigator"
    ],
    "answer": [
      1
    ],
    "explanation": "The Key influencers visual analyzes factors associated with a metric or category; findings require careful interpretation."
  },
  {
    "id": "visual-059",
    "domain": "Visualize and analyze the data",
    "topic": "Key influencers",
    "type": "single",
    "question": "For a regional performance report, which action is most appropriate? Which visual can help explore factors associated with a selected outcome?",
    "options": [
      "Key influencers",
      "Shape map only",
      "Page navigator",
      "Table of contents"
    ],
    "answer": [
      0
    ],
    "explanation": "The Key influencers visual analyzes factors associated with a metric or category; findings require careful interpretation."
  },
  {
    "id": "visual-060",
    "domain": "Visualize and analyze the data",
    "topic": "Key influencers",
    "type": "single",
    "question": "A team maintaining a customer analytics report asks: which visual can help explore factors associated with a selected outcome?",
    "options": [
      "Shape map only",
      "Page navigator",
      "Table of contents",
      "Key influencers"
    ],
    "answer": [
      3
    ],
    "explanation": "The Key influencers visual analyzes factors associated with a metric or category; findings require careful interpretation."
  },
  {
    "id": "visual-061",
    "domain": "Visualize and analyze the data",
    "topic": "Anomaly detection",
    "type": "single",
    "question": "While working with an executive dashboard, on a supported time-series line chart, what can anomaly detection help identify?",
    "options": [
      "Users who have workspace admin access",
      "Missing data source credentials",
      "Duplicate model relationships automatically",
      "Points that differ notably from the expected pattern"
    ],
    "answer": [
      3
    ],
    "explanation": "Anomaly detection flags unusual points relative to a modelled trend; it is not proof of a cause."
  },
  {
    "id": "visual-062",
    "domain": "Visualize and analyze the data",
    "topic": "Anomaly detection",
    "type": "single",
    "question": "Scenario: A regional performance report. On a supported time-series line chart, what can anomaly detection help identify?",
    "options": [
      "Missing data source credentials",
      "Duplicate model relationships automatically",
      "Points that differ notably from the expected pattern",
      "Users who have workspace admin access"
    ],
    "answer": [
      2
    ],
    "explanation": "Anomaly detection flags unusual points relative to a modelled trend; it is not proof of a cause."
  },
  {
    "id": "visual-063",
    "domain": "Visualize and analyze the data",
    "topic": "Anomaly detection",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? On a supported time-series line chart, what can anomaly detection help identify?",
    "options": [
      "Duplicate model relationships automatically",
      "Points that differ notably from the expected pattern",
      "Users who have workspace admin access",
      "Missing data source credentials"
    ],
    "answer": [
      1
    ],
    "explanation": "Anomaly detection flags unusual points relative to a modelled trend; it is not proof of a cause."
  },
  {
    "id": "visual-064",
    "domain": "Visualize and analyze the data",
    "topic": "Anomaly detection",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: on a supported time-series line chart, what can anomaly detection help identify?",
    "options": [
      "Points that differ notably from the expected pattern",
      "Users who have workspace admin access",
      "Missing data source credentials",
      "Duplicate model relationships automatically"
    ],
    "answer": [
      0
    ],
    "explanation": "Anomaly detection flags unusual points relative to a modelled trend; it is not proof of a cause."
  },
  {
    "id": "visual-065",
    "domain": "Visualize and analyze the data",
    "topic": "Forecasting",
    "type": "single",
    "question": "While working with a regional performance report, what should you check before adding a forecast to a line chart?",
    "options": [
      "The visual and data shape meet forecasting requirements and the series is meaningful",
      "The report uses only text columns",
      "All dates are duplicated",
      "RLS is disabled"
    ],
    "answer": [
      0
    ],
    "explanation": "Forecasting availability depends on supported visual settings and data characteristics; validate assumptions and uncertainty."
  },
  {
    "id": "visual-066",
    "domain": "Visualize and analyze the data",
    "topic": "Forecasting",
    "type": "single",
    "question": "Scenario: A customer analytics report. What should you check before adding a forecast to a line chart?",
    "options": [
      "The report uses only text columns",
      "All dates are duplicated",
      "RLS is disabled",
      "The visual and data shape meet forecasting requirements and the series is meaningful"
    ],
    "answer": [
      3
    ],
    "explanation": "Forecasting availability depends on supported visual settings and data characteristics; validate assumptions and uncertainty."
  },
  {
    "id": "visual-067",
    "domain": "Visualize and analyze the data",
    "topic": "Forecasting",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? What should you check before adding a forecast to a line chart?",
    "options": [
      "All dates are duplicated",
      "RLS is disabled",
      "The visual and data shape meet forecasting requirements and the series is meaningful",
      "The report uses only text columns"
    ],
    "answer": [
      2
    ],
    "explanation": "Forecasting availability depends on supported visual settings and data characteristics; validate assumptions and uncertainty."
  },
  {
    "id": "visual-068",
    "domain": "Visualize and analyze the data",
    "topic": "Forecasting",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: what should you check before adding a forecast to a line chart?",
    "options": [
      "RLS is disabled",
      "The visual and data shape meet forecasting requirements and the series is meaningful",
      "The report uses only text columns",
      "All dates are duplicated"
    ],
    "answer": [
      1
    ],
    "explanation": "Forecasting availability depends on supported visual settings and data characteristics; validate assumptions and uncertainty."
  },
  {
    "id": "visual-069",
    "domain": "Visualize and analyze the data",
    "topic": "Accessibility",
    "type": "single",
    "question": "While working with a customer analytics report, which practice improves report accessibility for users relying on screen readers?",
    "options": [
      "Use tiny low-contrast labels",
      "Add meaningful alt text and use a logical reading order",
      "Use color alone to convey all meaning",
      "Hide every title"
    ],
    "answer": [
      1
    ],
    "explanation": "Alt text, reading order, contrast, keyboard support, and non-color cues improve accessibility."
  },
  {
    "id": "visual-070",
    "domain": "Visualize and analyze the data",
    "topic": "Accessibility",
    "type": "single",
    "question": "Scenario: A monthly finance dashboard. Which practice improves report accessibility for users relying on screen readers?",
    "options": [
      "Add meaningful alt text and use a logical reading order",
      "Use color alone to convey all meaning",
      "Hide every title",
      "Use tiny low-contrast labels"
    ],
    "answer": [
      0
    ],
    "explanation": "Alt text, reading order, contrast, keyboard support, and non-color cues improve accessibility."
  },
  {
    "id": "visual-071",
    "domain": "Visualize and analyze the data",
    "topic": "Accessibility",
    "type": "single",
    "question": "For an operations monitoring report, which action is most appropriate? Which practice improves report accessibility for users relying on screen readers?",
    "options": [
      "Use color alone to convey all meaning",
      "Hide every title",
      "Use tiny low-contrast labels",
      "Add meaningful alt text and use a logical reading order"
    ],
    "answer": [
      3
    ],
    "explanation": "Alt text, reading order, contrast, keyboard support, and non-color cues improve accessibility."
  },
  {
    "id": "visual-072",
    "domain": "Visualize and analyze the data",
    "topic": "Accessibility",
    "type": "single",
    "question": "A team maintaining an executive dashboard asks: which practice improves report accessibility for users relying on screen readers?",
    "options": [
      "Hide every title",
      "Use tiny low-contrast labels",
      "Add meaningful alt text and use a logical reading order",
      "Use color alone to convey all meaning"
    ],
    "answer": [
      2
    ],
    "explanation": "Alt text, reading order, contrast, keyboard support, and non-color cues improve accessibility."
  },
  {
    "id": "visual-073",
    "domain": "Visualize and analyze the data",
    "topic": "Color and contrast",
    "type": "single",
    "question": "While working with a monthly finance dashboard, what is a strong design practice when using color to distinguish categories?",
    "options": [
      "Use low contrast for all text",
      "Change color meaning on every page",
      "Use a consistent palette and do not rely on color alone",
      "Use as many unrelated colors as possible"
    ],
    "answer": [
      2
    ],
    "explanation": "Consistent color semantics and alternative labels improve readability and accessibility."
  },
  {
    "id": "visual-074",
    "domain": "Visualize and analyze the data",
    "topic": "Color and contrast",
    "type": "single",
    "question": "Scenario: An operations monitoring report. What is a strong design practice when using color to distinguish categories?",
    "options": [
      "Change color meaning on every page",
      "Use a consistent palette and do not rely on color alone",
      "Use as many unrelated colors as possible",
      "Use low contrast for all text"
    ],
    "answer": [
      1
    ],
    "explanation": "Consistent color semantics and alternative labels improve readability and accessibility."
  },
  {
    "id": "visual-075",
    "domain": "Visualize and analyze the data",
    "topic": "Color and contrast",
    "type": "single",
    "question": "For an executive dashboard, which action is most appropriate? What is a strong design practice when using color to distinguish categories?",
    "options": [
      "Use a consistent palette and do not rely on color alone",
      "Use as many unrelated colors as possible",
      "Use low contrast for all text",
      "Change color meaning on every page"
    ],
    "answer": [
      0
    ],
    "explanation": "Consistent color semantics and alternative labels improve readability and accessibility."
  },
  {
    "id": "visual-076",
    "domain": "Visualize and analyze the data",
    "topic": "Color and contrast",
    "type": "single",
    "question": "A team maintaining a regional performance report asks: what is a strong design practice when using color to distinguish categories?",
    "options": [
      "Use as many unrelated colors as possible",
      "Use low contrast for all text",
      "Change color meaning on every page",
      "Use a consistent palette and do not rely on color alone"
    ],
    "answer": [
      3
    ],
    "explanation": "Consistent color semantics and alternative labels improve readability and accessibility."
  },
  {
    "id": "visual-077",
    "domain": "Visualize and analyze the data",
    "topic": "Report performance",
    "type": "single",
    "question": "While working with an operations monitoring report, a page loads slowly and contains many complex visuals. What is a sensible first diagnostic step?",
    "options": [
      "Rewrite every measure without measuring",
      "Add more visuals",
      "Convert all numeric fields to text",
      "Use Performance Analyzer to identify slow visuals and query time"
    ],
    "answer": [
      3
    ],
    "explanation": "Performance Analyzer helps identify which visuals and queries contribute most to report rendering time."
  },
  {
    "id": "visual-078",
    "domain": "Visualize and analyze the data",
    "topic": "Report performance",
    "type": "single",
    "question": "Scenario: An executive dashboard. A page loads slowly and contains many complex visuals. What is a sensible first diagnostic step?",
    "options": [
      "Add more visuals",
      "Convert all numeric fields to text",
      "Use Performance Analyzer to identify slow visuals and query time",
      "Rewrite every measure without measuring"
    ],
    "answer": [
      2
    ],
    "explanation": "Performance Analyzer helps identify which visuals and queries contribute most to report rendering time."
  },
  {
    "id": "visual-079",
    "domain": "Visualize and analyze the data",
    "topic": "Report performance",
    "type": "single",
    "question": "For a regional performance report, which action is most appropriate? A page loads slowly and contains many complex visuals. What is a sensible first diagnostic step?",
    "options": [
      "Convert all numeric fields to text",
      "Use Performance Analyzer to identify slow visuals and query time",
      "Rewrite every measure without measuring",
      "Add more visuals"
    ],
    "answer": [
      1
    ],
    "explanation": "Performance Analyzer helps identify which visuals and queries contribute most to report rendering time."
  },
  {
    "id": "visual-080",
    "domain": "Visualize and analyze the data",
    "topic": "Report performance",
    "type": "single",
    "question": "A team maintaining a customer analytics report asks: a page loads slowly and contains many complex visuals. What is a sensible first diagnostic step?",
    "options": [
      "Use Performance Analyzer to identify slow visuals and query time",
      "Rewrite every measure without measuring",
      "Add more visuals",
      "Convert all numeric fields to text"
    ],
    "answer": [
      0
    ],
    "explanation": "Performance Analyzer helps identify which visuals and queries contribute most to report rendering time."
  },
  {
    "id": "visual-081",
    "domain": "Visualize and analyze the data",
    "topic": "Visual choice",
    "type": "single",
    "question": "While working with an executive dashboard, a user needs to compare parts of a whole across many categories with precise values. What should guide the visual choice?",
    "options": [
      "The analytical question, category count, and need for accurate comparison",
      "Which visual looks most decorative",
      "The file name",
      "The number of report authors"
    ],
    "answer": [
      0
    ],
    "explanation": "Visuals should match the question; bar charts often compare categories more accurately than crowded pie charts."
  },
  {
    "id": "visual-082",
    "domain": "Visualize and analyze the data",
    "topic": "Visual choice",
    "type": "single",
    "question": "Scenario: A regional performance report. A user needs to compare parts of a whole across many categories with precise values. What should guide the visual choice?",
    "options": [
      "Which visual looks most decorative",
      "The file name",
      "The number of report authors",
      "The analytical question, category count, and need for accurate comparison"
    ],
    "answer": [
      3
    ],
    "explanation": "Visuals should match the question; bar charts often compare categories more accurately than crowded pie charts."
  },
  {
    "id": "visual-083",
    "domain": "Visualize and analyze the data",
    "topic": "Visual choice",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? A user needs to compare parts of a whole across many categories with precise values. What should guide the visual choice?",
    "options": [
      "The file name",
      "The number of report authors",
      "The analytical question, category count, and need for accurate comparison",
      "Which visual looks most decorative"
    ],
    "answer": [
      2
    ],
    "explanation": "Visuals should match the question; bar charts often compare categories more accurately than crowded pie charts."
  },
  {
    "id": "visual-084",
    "domain": "Visualize and analyze the data",
    "topic": "Visual choice",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: a user needs to compare parts of a whole across many categories with precise values. What should guide the visual choice?",
    "options": [
      "The number of report authors",
      "The analytical question, category count, and need for accurate comparison",
      "Which visual looks most decorative",
      "The file name"
    ],
    "answer": [
      1
    ],
    "explanation": "Visuals should match the question; bar charts often compare categories more accurately than crowded pie charts."
  },
  {
    "id": "visual-085",
    "domain": "Visualize and analyze the data",
    "topic": "Field parameters",
    "type": "single",
    "question": "While working with a regional performance report, what can field parameters allow a report consumer to change dynamically?",
    "options": [
      "The workspace license",
      "Which measures or dimensions a visual uses",
      "The semantic model's stored data type automatically",
      "The source database password"
    ],
    "answer": [
      1
    ],
    "explanation": "Field parameters let consumers switch fields or measures in visuals when configured in the model."
  },
  {
    "id": "visual-086",
    "domain": "Visualize and analyze the data",
    "topic": "Field parameters",
    "type": "single",
    "question": "Scenario: A customer analytics report. What can field parameters allow a report consumer to change dynamically?",
    "options": [
      "Which measures or dimensions a visual uses",
      "The semantic model's stored data type automatically",
      "The source database password",
      "The workspace license"
    ],
    "answer": [
      0
    ],
    "explanation": "Field parameters let consumers switch fields or measures in visuals when configured in the model."
  },
  {
    "id": "visual-087",
    "domain": "Visualize and analyze the data",
    "topic": "Field parameters",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? What can field parameters allow a report consumer to change dynamically?",
    "options": [
      "The semantic model's stored data type automatically",
      "The source database password",
      "The workspace license",
      "Which measures or dimensions a visual uses"
    ],
    "answer": [
      3
    ],
    "explanation": "Field parameters let consumers switch fields or measures in visuals when configured in the model."
  },
  {
    "id": "visual-088",
    "domain": "Visualize and analyze the data",
    "topic": "Field parameters",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: what can field parameters allow a report consumer to change dynamically?",
    "options": [
      "The source database password",
      "The workspace license",
      "Which measures or dimensions a visual uses",
      "The semantic model's stored data type automatically"
    ],
    "answer": [
      2
    ],
    "explanation": "Field parameters let consumers switch fields or measures in visuals when configured in the model."
  },
  {
    "id": "visual-089",
    "domain": "Visualize and analyze the data",
    "topic": "What-if parameter",
    "type": "single",
    "question": "While working with a customer analytics report, what is a What-if parameter commonly used for?",
    "options": [
      "Replace all relationships",
      "Combine files from a folder",
      "Let users explore results under adjustable assumptions",
      "Set row-level security identities"
    ],
    "answer": [
      2
    ],
    "explanation": "A What-if parameter creates a user-controlled value that can feed scenario measures."
  },
  {
    "id": "visual-090",
    "domain": "Visualize and analyze the data",
    "topic": "What-if parameter",
    "type": "single",
    "question": "Scenario: A monthly finance dashboard. What is a What-if parameter commonly used for?",
    "options": [
      "Combine files from a folder",
      "Let users explore results under adjustable assumptions",
      "Set row-level security identities",
      "Replace all relationships"
    ],
    "answer": [
      1
    ],
    "explanation": "A What-if parameter creates a user-controlled value that can feed scenario measures."
  },
  {
    "id": "visual-091",
    "domain": "Visualize and analyze the data",
    "topic": "What-if parameter",
    "type": "single",
    "question": "For an operations monitoring report, which action is most appropriate? What is a What-if parameter commonly used for?",
    "options": [
      "Let users explore results under adjustable assumptions",
      "Set row-level security identities",
      "Replace all relationships",
      "Combine files from a folder"
    ],
    "answer": [
      0
    ],
    "explanation": "A What-if parameter creates a user-controlled value that can feed scenario measures."
  },
  {
    "id": "visual-092",
    "domain": "Visualize and analyze the data",
    "topic": "What-if parameter",
    "type": "single",
    "question": "A team maintaining an executive dashboard asks: what is a What-if parameter commonly used for?",
    "options": [
      "Set row-level security identities",
      "Replace all relationships",
      "Combine files from a folder",
      "Let users explore results under adjustable assumptions"
    ],
    "answer": [
      3
    ],
    "explanation": "A What-if parameter creates a user-controlled value that can feed scenario measures."
  },
  {
    "id": "visual-093",
    "domain": "Visualize and analyze the data",
    "topic": "Sync slicers",
    "type": "single",
    "question": "While working with a monthly finance dashboard, a report has several pages and the same region selection should remain consistent across them. What feature helps?",
    "options": [
      "Query folding",
      "Data labels only",
      "A calculated column",
      "Sync slicers"
    ],
    "answer": [
      3
    ],
    "explanation": "Sync slicers shares slicer state across selected report pages."
  },
  {
    "id": "visual-094",
    "domain": "Visualize and analyze the data",
    "topic": "Sync slicers",
    "type": "single",
    "question": "Scenario: An operations monitoring report. A report has several pages and the same region selection should remain consistent across them. What feature helps?",
    "options": [
      "Data labels only",
      "A calculated column",
      "Sync slicers",
      "Query folding"
    ],
    "answer": [
      2
    ],
    "explanation": "Sync slicers shares slicer state across selected report pages."
  },
  {
    "id": "visual-095",
    "domain": "Visualize and analyze the data",
    "topic": "Sync slicers",
    "type": "single",
    "question": "For an executive dashboard, which action is most appropriate? A report has several pages and the same region selection should remain consistent across them. What feature helps?",
    "options": [
      "A calculated column",
      "Sync slicers",
      "Query folding",
      "Data labels only"
    ],
    "answer": [
      1
    ],
    "explanation": "Sync slicers shares slicer state across selected report pages."
  },
  {
    "id": "visual-096",
    "domain": "Visualize and analyze the data",
    "topic": "Sync slicers",
    "type": "single",
    "question": "A team maintaining a regional performance report asks: a report has several pages and the same region selection should remain consistent across them. What feature helps?",
    "options": [
      "Sync slicers",
      "Query folding",
      "Data labels only",
      "A calculated column"
    ],
    "answer": [
      0
    ],
    "explanation": "Sync slicers shares slicer state across selected report pages."
  },
  {
    "id": "visual-097",
    "domain": "Visualize and analyze the data",
    "topic": "Mobile layout",
    "type": "single",
    "question": "While working with an operations monitoring report, what should you use to optimize the experience for a phone-sized report view?",
    "options": [
      "Mobile layout view",
      "Only increase the desktop canvas width",
      "Turn off all titles",
      "Export every page as a screenshot"
    ],
    "answer": [
      0
    ],
    "explanation": "Mobile layout lets authors arrange visuals for a smaller screen separately from the desktop layout."
  },
  {
    "id": "visual-098",
    "domain": "Visualize and analyze the data",
    "topic": "Mobile layout",
    "type": "single",
    "question": "Scenario: An executive dashboard. What should you use to optimize the experience for a phone-sized report view?",
    "options": [
      "Only increase the desktop canvas width",
      "Turn off all titles",
      "Export every page as a screenshot",
      "Mobile layout view"
    ],
    "answer": [
      3
    ],
    "explanation": "Mobile layout lets authors arrange visuals for a smaller screen separately from the desktop layout."
  },
  {
    "id": "visual-099",
    "domain": "Visualize and analyze the data",
    "topic": "Mobile layout",
    "type": "single",
    "question": "For a regional performance report, which action is most appropriate? What should you use to optimize the experience for a phone-sized report view?",
    "options": [
      "Turn off all titles",
      "Export every page as a screenshot",
      "Mobile layout view",
      "Only increase the desktop canvas width"
    ],
    "answer": [
      2
    ],
    "explanation": "Mobile layout lets authors arrange visuals for a smaller screen separately from the desktop layout."
  },
  {
    "id": "visual-100",
    "domain": "Visualize and analyze the data",
    "topic": "Mobile layout",
    "type": "single",
    "question": "A team maintaining a customer analytics report asks: what should you use to optimize the experience for a phone-sized report view?",
    "options": [
      "Export every page as a screenshot",
      "Mobile layout view",
      "Only increase the desktop canvas width",
      "Turn off all titles"
    ],
    "answer": [
      1
    ],
    "explanation": "Mobile layout lets authors arrange visuals for a smaller screen separately from the desktop layout."
  },
  {
    "id": "visual-101",
    "domain": "Visualize and analyze the data",
    "topic": "Visual-level filters",
    "type": "single",
    "question": "While working with an executive dashboard, you need to limit one chart to the top five products without filtering other visuals. Where can you apply the filter?",
    "options": [
      "In the theme JSON",
      "At the visual level",
      "Only in the source database",
      "Only as a workspace role"
    ],
    "answer": [
      1
    ],
    "explanation": "Visual-level filters affect the selected visual, while page- and report-level filters have broader scope."
  },
  {
    "id": "visual-102",
    "domain": "Visualize and analyze the data",
    "topic": "Visual-level filters",
    "type": "single",
    "question": "Scenario: A regional performance report. You need to limit one chart to the top five products without filtering other visuals. Where can you apply the filter?",
    "options": [
      "At the visual level",
      "Only in the source database",
      "Only as a workspace role",
      "In the theme JSON"
    ],
    "answer": [
      0
    ],
    "explanation": "Visual-level filters affect the selected visual, while page- and report-level filters have broader scope."
  },
  {
    "id": "visual-103",
    "domain": "Visualize and analyze the data",
    "topic": "Visual-level filters",
    "type": "single",
    "question": "For a customer analytics report, which action is most appropriate? You need to limit one chart to the top five products without filtering other visuals. Where can you apply the filter?",
    "options": [
      "Only in the source database",
      "Only as a workspace role",
      "In the theme JSON",
      "At the visual level"
    ],
    "answer": [
      3
    ],
    "explanation": "Visual-level filters affect the selected visual, while page- and report-level filters have broader scope."
  },
  {
    "id": "visual-104",
    "domain": "Visualize and analyze the data",
    "topic": "Visual-level filters",
    "type": "single",
    "question": "A team maintaining a monthly finance dashboard asks: you need to limit one chart to the top five products without filtering other visuals. Where can you apply the filter?",
    "options": [
      "Only as a workspace role",
      "In the theme JSON",
      "At the visual level",
      "Only in the source database"
    ],
    "answer": [
      2
    ],
    "explanation": "Visual-level filters affect the selected visual, while page- and report-level filters have broader scope."
  },
  {
    "id": "visual-105",
    "domain": "Visualize and analyze the data",
    "topic": "Page/report filters",
    "type": "single",
    "question": "While working with a regional performance report, which filter scope affects visuals across every page of a report?",
    "options": [
      "A tooltip field only",
      "Selection pane visibility",
      "Report-level filter",
      "Visual-level filter"
    ],
    "answer": [
      2
    ],
    "explanation": "Report-level filters apply across report pages, subject to interactions and filter behavior."
  },
  {
    "id": "visual-106",
    "domain": "Visualize and analyze the data",
    "topic": "Page/report filters",
    "type": "single",
    "question": "Scenario: A customer analytics report. Which filter scope affects visuals across every page of a report?",
    "options": [
      "Selection pane visibility",
      "Report-level filter",
      "Visual-level filter",
      "A tooltip field only"
    ],
    "answer": [
      1
    ],
    "explanation": "Report-level filters apply across report pages, subject to interactions and filter behavior."
  },
  {
    "id": "visual-107",
    "domain": "Visualize and analyze the data",
    "topic": "Page/report filters",
    "type": "single",
    "question": "For a monthly finance dashboard, which action is most appropriate? Which filter scope affects visuals across every page of a report?",
    "options": [
      "Report-level filter",
      "Visual-level filter",
      "A tooltip field only",
      "Selection pane visibility"
    ],
    "answer": [
      0
    ],
    "explanation": "Report-level filters apply across report pages, subject to interactions and filter behavior."
  },
  {
    "id": "visual-108",
    "domain": "Visualize and analyze the data",
    "topic": "Page/report filters",
    "type": "single",
    "question": "A team maintaining an operations monitoring report asks: which filter scope affects visuals across every page of a report?",
    "options": [
      "Visual-level filter",
      "A tooltip field only",
      "Selection pane visibility",
      "Report-level filter"
    ],
    "answer": [
      3
    ],
    "explanation": "Report-level filters apply across report pages, subject to interactions and filter behavior."
  },
  {
    "id": "visual-109",
    "domain": "Visualize and analyze the data",
    "topic": "Bar chart",
    "type": "single",
    "question": "Knowledge check (Bar chart) — A customer analytics report: select the best answer. Which visual is usually effective for comparing values across categories?",
    "options": [
      "Gauge for every category",
      "A decorative image",
      "A single text box",
      "Bar or column chart"
    ],
    "answer": [
      3
    ],
    "explanation": "Bar and column charts support clear comparisons across categorical values."
  },
  {
    "id": "visual-110",
    "domain": "Visualize and analyze the data",
    "topic": "Line chart",
    "type": "single",
    "question": "Knowledge check (Line chart) — A monthly finance dashboard: select the best answer. Which visual is usually a good choice for showing a measure over time?",
    "options": [
      "Card only",
      "Slicer without a field",
      "Line chart",
      "Treemap only"
    ],
    "answer": [
      2
    ],
    "explanation": "Line charts emphasize trends and changes across an ordered time axis."
  },
  {
    "id": "visual-111",
    "domain": "Visualize and analyze the data",
    "topic": "KPI card",
    "type": "single",
    "question": "Knowledge check (KPI card) — An operations monitoring report: select the best answer. A report needs to show one important current value, such as total revenue. Which visual is suitable?",
    "options": [
      "Page navigator only",
      "Card visual",
      "Decomposition tree only",
      "Shape"
    ],
    "answer": [
      1
    ],
    "explanation": "A card highlights a single key metric; supporting context may be needed to explain comparisons or trends."
  },
  {
    "id": "visual-112",
    "domain": "Visualize and analyze the data",
    "topic": "Slicer",
    "type": "single",
    "question": "Knowledge check (Slicer) — An executive dashboard: select the best answer. What is the main purpose of a slicer?",
    "options": [
      "Let report consumers filter data interactively",
      "Refresh the source database",
      "Create a new relationship",
      "Define workspace permissions"
    ],
    "answer": [
      0
    ],
    "explanation": "Slicers expose interactive filters directly on the report canvas."
  },
  {
    "id": "visual-113",
    "domain": "Visualize and analyze the data",
    "topic": "Drill down",
    "type": "single",
    "question": "Knowledge check (Drill down) — A regional performance report: select the best answer. A hierarchy contains Year, Quarter, Month, and Day. What lets a user move from a summary level to lower levels in a visual?",
    "options": [
      "Row-level security",
      "Query folding",
      "Data source credentials",
      "Drill down"
    ],
    "answer": [
      3
    ],
    "explanation": "Drill-down navigates within a hierarchy in a visual."
  },
  {
    "id": "visual-114",
    "domain": "Visualize and analyze the data",
    "topic": "Drillthrough",
    "type": "single",
    "question": "Knowledge check (Drillthrough) — A customer analytics report: select the best answer. You want a user to right-click a customer and open a detail page filtered to that customer. Which feature fits?",
    "options": [
      "Incremental refresh",
      "Workspace admin role",
      "Drillthrough page",
      "Dataflow refresh"
    ],
    "answer": [
      2
    ],
    "explanation": "Drillthrough passes selected data context to a target detail page."
  },
  {
    "id": "visual-115",
    "domain": "Visualize and analyze the data",
    "topic": "Tooltip page",
    "type": "single",
    "question": "Knowledge check (Tooltip page) — A monthly finance dashboard: select the best answer. You need a custom hover panel with additional visuals for a data point. Which feature is designed for this?",
    "options": [
      "Sensitivity label only",
      "Report page tooltip",
      "Gateway cluster",
      "DAX calculated table"
    ],
    "answer": [
      1
    ],
    "explanation": "A report page tooltip can show contextual details when hovering over supported visuals."
  },
  {
    "id": "visual-116",
    "domain": "Visualize and analyze the data",
    "topic": "Bookmarks",
    "type": "single",
    "question": "Knowledge check (Bookmarks) — An operations monitoring report: select the best answer. What can a bookmark capture for guided report navigation or alternate views?",
    "options": [
      "A saved state of report pages, visuals, and selected display/filter settings according to its options",
      "A copy of the source database",
      "A DAX formula's compiled binary",
      "A user's password"
    ],
    "answer": [
      0
    ],
    "explanation": "Bookmarks capture configured report state and can support storytelling and navigation."
  },
  {
    "id": "visual-117",
    "domain": "Visualize and analyze the data",
    "topic": "Selection pane",
    "type": "single",
    "question": "Knowledge check (Selection pane) — An executive dashboard: select the best answer. Which pane helps manage visual visibility and layering for bookmark-based views?",
    "options": [
      "Gateway settings",
      "Data source credentials",
      "Refresh history only",
      "Selection pane"
    ],
    "answer": [
      3
    ],
    "explanation": "The Selection pane manages visual order and visibility, often alongside bookmarks."
  },
  {
    "id": "visual-118",
    "domain": "Visualize and analyze the data",
    "topic": "Edit interactions",
    "type": "single",
    "question": "Knowledge check (Edit interactions) — A regional performance report: select the best answer. A slicer should filter one chart but not affect another. What should you configure?",
    "options": [
      "A new workspace",
      "A calculated table",
      "Edit interactions",
      "Incremental refresh"
    ],
    "answer": [
      2
    ],
    "explanation": "Edit interactions controls how a selected visual affects other visuals on the page."
  },
  {
    "id": "visual-119",
    "domain": "Visualize and analyze the data",
    "topic": "Conditional formatting",
    "type": "single",
    "question": "Knowledge check (Conditional formatting) — A customer analytics report: select the best answer. You want negative profit values to appear red and positive values green. What feature is appropriate?",
    "options": [
      "RLS",
      "Conditional formatting",
      "Data gateway",
      "Append queries"
    ],
    "answer": [
      1
    ],
    "explanation": "Conditional formatting changes visual appearance based on values or rules."
  },
  {
    "id": "visual-120",
    "domain": "Visualize and analyze the data",
    "topic": "Sort by column",
    "type": "single",
    "question": "Knowledge check (Sort by column) — A monthly finance dashboard: select the best answer. Month names appear alphabetically rather than chronologically. What model setting can fix this?",
    "options": [
      "Sort MonthName by MonthNumber",
      "Enable bidirectional filtering",
      "Change the report theme",
      "Use DirectQuery"
    ],
    "answer": [
      0
    ],
    "explanation": "Sort by Column uses a numeric or ordered column to control display order for labels."
  },
  {
    "id": "visual-121",
    "domain": "Visualize and analyze the data",
    "topic": "Small multiples",
    "type": "single",
    "question": "Knowledge check (Small multiples) — An operations monitoring report: select the best answer. You want the same chart repeated for each product region to compare patterns. Which visual capability can help?",
    "options": [
      "A single KPI card",
      "A gateway",
      "A data alert",
      "Small multiples"
    ],
    "answer": [
      3
    ],
    "explanation": "Small multiples create a grid of repeated charts split by a categorical field."
  },
  {
    "id": "visual-122",
    "domain": "Visualize and analyze the data",
    "topic": "Decomposition tree",
    "type": "single",
    "question": "Knowledge check (Decomposition tree) — An executive dashboard: select the best answer. Which visual supports interactive root-cause exploration by splitting a metric across dimensions?",
    "options": [
      "Text box",
      "Button with no action",
      "Decomposition tree",
      "Card only"
    ],
    "answer": [
      2
    ],
    "explanation": "The decomposition tree lets users explore how a measure breaks down by different dimensions."
  },
  {
    "id": "visual-123",
    "domain": "Visualize and analyze the data",
    "topic": "Key influencers",
    "type": "single",
    "question": "Knowledge check (Key influencers) — A regional performance report: select the best answer. Which visual can help explore factors associated with a selected outcome?",
    "options": [
      "Table of contents",
      "Key influencers",
      "Shape map only",
      "Page navigator"
    ],
    "answer": [
      1
    ],
    "explanation": "The Key influencers visual analyzes factors associated with a metric or category; findings require careful interpretation."
  },
  {
    "id": "visual-124",
    "domain": "Visualize and analyze the data",
    "topic": "Anomaly detection",
    "type": "single",
    "question": "Knowledge check (Anomaly detection) — A customer analytics report: select the best answer. On a supported time-series line chart, what can anomaly detection help identify?",
    "options": [
      "Points that differ notably from the expected pattern",
      "Users who have workspace admin access",
      "Missing data source credentials",
      "Duplicate model relationships automatically"
    ],
    "answer": [
      0
    ],
    "explanation": "Anomaly detection flags unusual points relative to a modelled trend; it is not proof of a cause."
  },
  {
    "id": "visual-125",
    "domain": "Visualize and analyze the data",
    "topic": "Forecasting",
    "type": "single",
    "question": "Knowledge check (Forecasting) — A monthly finance dashboard: select the best answer. What should you check before adding a forecast to a line chart?",
    "options": [
      "The report uses only text columns",
      "All dates are duplicated",
      "RLS is disabled",
      "The visual and data shape meet forecasting requirements and the series is meaningful"
    ],
    "answer": [
      3
    ],
    "explanation": "Forecasting availability depends on supported visual settings and data characteristics; validate assumptions and uncertainty."
  },
  {
    "id": "visual-126",
    "domain": "Visualize and analyze the data",
    "topic": "Accessibility",
    "type": "single",
    "question": "Knowledge check (Accessibility) — An operations monitoring report: select the best answer. Which practice improves report accessibility for users relying on screen readers?",
    "options": [
      "Hide every title",
      "Use tiny low-contrast labels",
      "Add meaningful alt text and use a logical reading order",
      "Use color alone to convey all meaning"
    ],
    "answer": [
      2
    ],
    "explanation": "Alt text, reading order, contrast, keyboard support, and non-color cues improve accessibility."
  },
  {
    "id": "visual-127",
    "domain": "Visualize and analyze the data",
    "topic": "Color and contrast",
    "type": "single",
    "question": "Knowledge check (Color and contrast) — An executive dashboard: select the best answer. What is a strong design practice when using color to distinguish categories?",
    "options": [
      "Change color meaning on every page",
      "Use a consistent palette and do not rely on color alone",
      "Use as many unrelated colors as possible",
      "Use low contrast for all text"
    ],
    "answer": [
      1
    ],
    "explanation": "Consistent color semantics and alternative labels improve readability and accessibility."
  },
  {
    "id": "visual-128",
    "domain": "Visualize and analyze the data",
    "topic": "Report performance",
    "type": "single",
    "question": "Knowledge check (Report performance) — A regional performance report: select the best answer. A page loads slowly and contains many complex visuals. What is a sensible first diagnostic step?",
    "options": [
      "Use Performance Analyzer to identify slow visuals and query time",
      "Rewrite every measure without measuring",
      "Add more visuals",
      "Convert all numeric fields to text"
    ],
    "answer": [
      0
    ],
    "explanation": "Performance Analyzer helps identify which visuals and queries contribute most to report rendering time."
  },
  {
    "id": "visual-129",
    "domain": "Visualize and analyze the data",
    "topic": "Visual choice",
    "type": "single",
    "question": "Knowledge check (Visual choice) — A customer analytics report: select the best answer. A user needs to compare parts of a whole across many categories with precise values. What should guide the visual choice?",
    "options": [
      "Which visual looks most decorative",
      "The file name",
      "The number of report authors",
      "The analytical question, category count, and need for accurate comparison"
    ],
    "answer": [
      3
    ],
    "explanation": "Visuals should match the question; bar charts often compare categories more accurately than crowded pie charts."
  },
  {
    "id": "visual-130",
    "domain": "Visualize and analyze the data",
    "topic": "Field parameters",
    "type": "single",
    "question": "Knowledge check (Field parameters) — A monthly finance dashboard: select the best answer. What can field parameters allow a report consumer to change dynamically?",
    "options": [
      "The source database password",
      "The workspace license",
      "Which measures or dimensions a visual uses",
      "The semantic model's stored data type automatically"
    ],
    "answer": [
      2
    ],
    "explanation": "Field parameters let consumers switch fields or measures in visuals when configured in the model."
  },
  {
    "id": "gov-001",
    "domain": "Manage and secure Power BI",
    "topic": "Publish",
    "type": "single",
    "question": "While working with a published departmental model, what is the usual way to publish a report and semantic model from Power BI Desktop to the Power BI service?",
    "options": [
      "Publish and choose a destination workspace",
      "Export the DAX code into a text file",
      "Create a bookmark only",
      "Rename the Windows folder"
    ],
    "answer": [
      0
    ],
    "explanation": "Publishing sends the report and model to a selected workspace in the service."
  },
  {
    "id": "gov-002",
    "domain": "Manage and secure Power BI",
    "topic": "Publish",
    "type": "single",
    "question": "Scenario: A shared executive report. What is the usual way to publish a report and semantic model from Power BI Desktop to the Power BI service?",
    "options": [
      "Export the DAX code into a text file",
      "Create a bookmark only",
      "Rename the Windows folder",
      "Publish and choose a destination workspace"
    ],
    "answer": [
      3
    ],
    "explanation": "Publishing sends the report and model to a selected workspace in the service."
  },
  {
    "id": "gov-003",
    "domain": "Manage and secure Power BI",
    "topic": "Publish",
    "type": "single",
    "question": "For a production workspace, which action is most appropriate? What is the usual way to publish a report and semantic model from Power BI Desktop to the Power BI service?",
    "options": [
      "Create a bookmark only",
      "Rename the Windows folder",
      "Publish and choose a destination workspace",
      "Export the DAX code into a text file"
    ],
    "answer": [
      2
    ],
    "explanation": "Publishing sends the report and model to a selected workspace in the service."
  },
  {
    "id": "gov-004",
    "domain": "Manage and secure Power BI",
    "topic": "Publish",
    "type": "single",
    "question": "A team maintaining a governed enterprise dataset asks: what is the usual way to publish a report and semantic model from Power BI Desktop to the Power BI service?",
    "options": [
      "Rename the Windows folder",
      "Publish and choose a destination workspace",
      "Export the DAX code into a text file",
      "Create a bookmark only"
    ],
    "answer": [
      1
    ],
    "explanation": "Publishing sends the report and model to a selected workspace in the service."
  },
  {
    "id": "gov-005",
    "domain": "Manage and secure Power BI",
    "topic": "Workspace roles",
    "type": "single",
    "question": "While working with a shared executive report, which workspace role should be assigned according to a user's required responsibilities rather than convenience?",
    "options": [
      "No role can ever be changed",
      "The least-privileged role that enables the required tasks",
      "Admin for every viewer",
      "Contributor for every external user"
    ],
    "answer": [
      1
    ],
    "explanation": "Use least privilege and assign workspace roles according to the tasks a user needs to perform."
  },
  {
    "id": "gov-006",
    "domain": "Manage and secure Power BI",
    "topic": "Workspace roles",
    "type": "single",
    "question": "Scenario: A production workspace. Which workspace role should be assigned according to a user's required responsibilities rather than convenience?",
    "options": [
      "The least-privileged role that enables the required tasks",
      "Admin for every viewer",
      "Contributor for every external user",
      "No role can ever be changed"
    ],
    "answer": [
      0
    ],
    "explanation": "Use least privilege and assign workspace roles according to the tasks a user needs to perform."
  },
  {
    "id": "gov-007",
    "domain": "Manage and secure Power BI",
    "topic": "Workspace roles",
    "type": "single",
    "question": "For a governed enterprise dataset, which action is most appropriate? Which workspace role should be assigned according to a user's required responsibilities rather than convenience?",
    "options": [
      "Admin for every viewer",
      "Contributor for every external user",
      "No role can ever be changed",
      "The least-privileged role that enables the required tasks"
    ],
    "answer": [
      3
    ],
    "explanation": "Use least privilege and assign workspace roles according to the tasks a user needs to perform."
  },
  {
    "id": "gov-008",
    "domain": "Manage and secure Power BI",
    "topic": "Workspace roles",
    "type": "single",
    "question": "A team maintaining a self-service analytics solution asks: which workspace role should be assigned according to a user's required responsibilities rather than convenience?",
    "options": [
      "Contributor for every external user",
      "No role can ever be changed",
      "The least-privileged role that enables the required tasks",
      "Admin for every viewer"
    ],
    "answer": [
      2
    ],
    "explanation": "Use least privilege and assign workspace roles according to the tasks a user needs to perform."
  },
  {
    "id": "gov-009",
    "domain": "Manage and secure Power BI",
    "topic": "App audience",
    "type": "single",
    "question": "While working with a production workspace, you want to distribute a curated set of reports to a broad business audience without giving everyone edit access to the workspace. What is often appropriate?",
    "options": [
      "Share the owner's password",
      "Send the PBIX file publicly",
      "Publish a Power BI app with suitable audience settings",
      "Make every consumer a workspace admin"
    ],
    "answer": [
      2
    ],
    "explanation": "Apps provide a packaged consumption experience with audience configuration distinct from workspace editing roles."
  },
  {
    "id": "gov-010",
    "domain": "Manage and secure Power BI",
    "topic": "App audience",
    "type": "single",
    "question": "Scenario: A governed enterprise dataset. You want to distribute a curated set of reports to a broad business audience without giving everyone edit access to the workspace. What is often appropriate?",
    "options": [
      "Send the PBIX file publicly",
      "Publish a Power BI app with suitable audience settings",
      "Make every consumer a workspace admin",
      "Share the owner's password"
    ],
    "answer": [
      1
    ],
    "explanation": "Apps provide a packaged consumption experience with audience configuration distinct from workspace editing roles."
  },
  {
    "id": "gov-011",
    "domain": "Manage and secure Power BI",
    "topic": "App audience",
    "type": "single",
    "question": "For a self-service analytics solution, which action is most appropriate? You want to distribute a curated set of reports to a broad business audience without giving everyone edit access to the workspace. What is often appropriate?",
    "options": [
      "Publish a Power BI app with suitable audience settings",
      "Make every consumer a workspace admin",
      "Share the owner's password",
      "Send the PBIX file publicly"
    ],
    "answer": [
      0
    ],
    "explanation": "Apps provide a packaged consumption experience with audience configuration distinct from workspace editing roles."
  },
  {
    "id": "gov-012",
    "domain": "Manage and secure Power BI",
    "topic": "App audience",
    "type": "single",
    "question": "A team maintaining a published departmental model asks: you want to distribute a curated set of reports to a broad business audience without giving everyone edit access to the workspace. What is often appropriate?",
    "options": [
      "Make every consumer a workspace admin",
      "Share the owner's password",
      "Send the PBIX file publicly",
      "Publish a Power BI app with suitable audience settings"
    ],
    "answer": [
      3
    ],
    "explanation": "Apps provide a packaged consumption experience with audience configuration distinct from workspace editing roles."
  },
  {
    "id": "gov-013",
    "domain": "Manage and secure Power BI",
    "topic": "RLS",
    "type": "single",
    "question": "While working with a governed enterprise dataset, what does row-level security primarily restrict?",
    "options": [
      "Which colors are available in a report",
      "How many bookmarks exist",
      "Which DAX functions can be typed",
      "Which rows a user can see in a semantic model"
    ],
    "answer": [
      3
    ],
    "explanation": "RLS filters data rows for users assigned to roles; it does not replace workspace and sharing permissions."
  },
  {
    "id": "gov-014",
    "domain": "Manage and secure Power BI",
    "topic": "RLS",
    "type": "single",
    "question": "Scenario: A self-service analytics solution. What does row-level security primarily restrict?",
    "options": [
      "How many bookmarks exist",
      "Which DAX functions can be typed",
      "Which rows a user can see in a semantic model",
      "Which colors are available in a report"
    ],
    "answer": [
      2
    ],
    "explanation": "RLS filters data rows for users assigned to roles; it does not replace workspace and sharing permissions."
  },
  {
    "id": "gov-015",
    "domain": "Manage and secure Power BI",
    "topic": "RLS",
    "type": "single",
    "question": "For a published departmental model, which action is most appropriate? What does row-level security primarily restrict?",
    "options": [
      "Which DAX functions can be typed",
      "Which rows a user can see in a semantic model",
      "Which colors are available in a report",
      "How many bookmarks exist"
    ],
    "answer": [
      1
    ],
    "explanation": "RLS filters data rows for users assigned to roles; it does not replace workspace and sharing permissions."
  },
  {
    "id": "gov-016",
    "domain": "Manage and secure Power BI",
    "topic": "RLS",
    "type": "single",
    "question": "A team maintaining a shared executive report asks: what does row-level security primarily restrict?",
    "options": [
      "Which rows a user can see in a semantic model",
      "Which colors are available in a report",
      "How many bookmarks exist",
      "Which DAX functions can be typed"
    ],
    "answer": [
      0
    ],
    "explanation": "RLS filters data rows for users assigned to roles; it does not replace workspace and sharing permissions."
  },
  {
    "id": "gov-017",
    "domain": "Manage and secure Power BI",
    "topic": "Dynamic RLS",
    "type": "single",
    "question": "While working with a self-service analytics solution, a model must show each sales representative only their assigned region based on the signed-in identity. Which approach is commonly used?",
    "options": [
      "Dynamic RLS using identity functions and a user-to-region mapping",
      "A static report title",
      "A bookmark per user only",
      "A hidden page with no security role"
    ],
    "answer": [
      0
    ],
    "explanation": "Dynamic RLS can evaluate the user's identity and filter a mapping table or related dimension."
  },
  {
    "id": "gov-018",
    "domain": "Manage and secure Power BI",
    "topic": "Dynamic RLS",
    "type": "single",
    "question": "Scenario: A published departmental model. A model must show each sales representative only their assigned region based on the signed-in identity. Which approach is commonly used?",
    "options": [
      "A static report title",
      "A bookmark per user only",
      "A hidden page with no security role",
      "Dynamic RLS using identity functions and a user-to-region mapping"
    ],
    "answer": [
      3
    ],
    "explanation": "Dynamic RLS can evaluate the user's identity and filter a mapping table or related dimension."
  },
  {
    "id": "gov-019",
    "domain": "Manage and secure Power BI",
    "topic": "Dynamic RLS",
    "type": "single",
    "question": "For a shared executive report, which action is most appropriate? A model must show each sales representative only their assigned region based on the signed-in identity. Which approach is commonly used?",
    "options": [
      "A bookmark per user only",
      "A hidden page with no security role",
      "Dynamic RLS using identity functions and a user-to-region mapping",
      "A static report title"
    ],
    "answer": [
      2
    ],
    "explanation": "Dynamic RLS can evaluate the user's identity and filter a mapping table or related dimension."
  },
  {
    "id": "gov-020",
    "domain": "Manage and secure Power BI",
    "topic": "Dynamic RLS",
    "type": "single",
    "question": "A team maintaining a production workspace asks: a model must show each sales representative only their assigned region based on the signed-in identity. Which approach is commonly used?",
    "options": [
      "A hidden page with no security role",
      "Dynamic RLS using identity functions and a user-to-region mapping",
      "A static report title",
      "A bookmark per user only"
    ],
    "answer": [
      1
    ],
    "explanation": "Dynamic RLS can evaluate the user's identity and filter a mapping table or related dimension."
  },
  {
    "id": "gov-021",
    "domain": "Manage and secure Power BI",
    "topic": "Test as role",
    "type": "single",
    "question": "While working with a published departmental model, before distributing a report with RLS, what should the model author do?",
    "options": [
      "Only test with an administrator account",
      "Test the configured roles and verify representative user views",
      "Assume relationships always filter correctly",
      "Disable all filters"
    ],
    "answer": [
      1
    ],
    "explanation": "Testing roles helps reveal incorrect relationships, mappings, and unexpected access."
  },
  {
    "id": "gov-022",
    "domain": "Manage and secure Power BI",
    "topic": "Test as role",
    "type": "single",
    "question": "Scenario: A shared executive report. Before distributing a report with RLS, what should the model author do?",
    "options": [
      "Test the configured roles and verify representative user views",
      "Assume relationships always filter correctly",
      "Disable all filters",
      "Only test with an administrator account"
    ],
    "answer": [
      0
    ],
    "explanation": "Testing roles helps reveal incorrect relationships, mappings, and unexpected access."
  },
  {
    "id": "gov-023",
    "domain": "Manage and secure Power BI",
    "topic": "Test as role",
    "type": "single",
    "question": "For a production workspace, which action is most appropriate? Before distributing a report with RLS, what should the model author do?",
    "options": [
      "Assume relationships always filter correctly",
      "Disable all filters",
      "Only test with an administrator account",
      "Test the configured roles and verify representative user views"
    ],
    "answer": [
      3
    ],
    "explanation": "Testing roles helps reveal incorrect relationships, mappings, and unexpected access."
  },
  {
    "id": "gov-024",
    "domain": "Manage and secure Power BI",
    "topic": "Test as role",
    "type": "single",
    "question": "A team maintaining a governed enterprise dataset asks: before distributing a report with RLS, what should the model author do?",
    "options": [
      "Disable all filters",
      "Only test with an administrator account",
      "Test the configured roles and verify representative user views",
      "Assume relationships always filter correctly"
    ],
    "answer": [
      2
    ],
    "explanation": "Testing roles helps reveal incorrect relationships, mappings, and unexpected access."
  },
  {
    "id": "gov-025",
    "domain": "Manage and secure Power BI",
    "topic": "RLS and workspace roles",
    "type": "single",
    "question": "While working with a shared executive report, why is testing RLS only as a workspace Admin insufficient?",
    "options": [
      "RLS only applies to the author",
      "Admin accounts do not support Power BI",
      "Workspace Admins generally have edit-level access and are not constrained like report consumers by RLS",
      "Admins cannot open reports"
    ],
    "answer": [
      2
    ],
    "explanation": "RLS behavior is intended for consumers with appropriate access; elevated workspace roles can bypass the consumer experience."
  },
  {
    "id": "gov-026",
    "domain": "Manage and secure Power BI",
    "topic": "RLS and workspace roles",
    "type": "single",
    "question": "Scenario: A production workspace. Why is testing RLS only as a workspace Admin insufficient?",
    "options": [
      "Admin accounts do not support Power BI",
      "Workspace Admins generally have edit-level access and are not constrained like report consumers by RLS",
      "Admins cannot open reports",
      "RLS only applies to the author"
    ],
    "answer": [
      1
    ],
    "explanation": "RLS behavior is intended for consumers with appropriate access; elevated workspace roles can bypass the consumer experience."
  },
  {
    "id": "gov-027",
    "domain": "Manage and secure Power BI",
    "topic": "RLS and workspace roles",
    "type": "single",
    "question": "For a governed enterprise dataset, which action is most appropriate? Why is testing RLS only as a workspace Admin insufficient?",
    "options": [
      "Workspace Admins generally have edit-level access and are not constrained like report consumers by RLS",
      "Admins cannot open reports",
      "RLS only applies to the author",
      "Admin accounts do not support Power BI"
    ],
    "answer": [
      0
    ],
    "explanation": "RLS behavior is intended for consumers with appropriate access; elevated workspace roles can bypass the consumer experience."
  },
  {
    "id": "gov-028",
    "domain": "Manage and secure Power BI",
    "topic": "RLS and workspace roles",
    "type": "single",
    "question": "A team maintaining a self-service analytics solution asks: why is testing RLS only as a workspace Admin insufficient?",
    "options": [
      "Admins cannot open reports",
      "RLS only applies to the author",
      "Admin accounts do not support Power BI",
      "Workspace Admins generally have edit-level access and are not constrained like report consumers by RLS"
    ],
    "answer": [
      3
    ],
    "explanation": "RLS behavior is intended for consumers with appropriate access; elevated workspace roles can bypass the consumer experience."
  },
  {
    "id": "gov-029",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway",
    "type": "single",
    "question": "While working with a production workspace, when a published model needs to refresh from an on-premises data source, what may be required?",
    "options": [
      "A report bookmark",
      "A new DAX measure for every table",
      "A mobile layout",
      "A configured on-premises data gateway and valid credentials"
    ],
    "answer": [
      3
    ],
    "explanation": "A gateway provides a secure bridge for supported on-premises sources to the Power BI service."
  },
  {
    "id": "gov-030",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway",
    "type": "single",
    "question": "Scenario: A governed enterprise dataset. When a published model needs to refresh from an on-premises data source, what may be required?",
    "options": [
      "A new DAX measure for every table",
      "A mobile layout",
      "A configured on-premises data gateway and valid credentials",
      "A report bookmark"
    ],
    "answer": [
      2
    ],
    "explanation": "A gateway provides a secure bridge for supported on-premises sources to the Power BI service."
  },
  {
    "id": "gov-031",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway",
    "type": "single",
    "question": "For a self-service analytics solution, which action is most appropriate? When a published model needs to refresh from an on-premises data source, what may be required?",
    "options": [
      "A mobile layout",
      "A configured on-premises data gateway and valid credentials",
      "A report bookmark",
      "A new DAX measure for every table"
    ],
    "answer": [
      1
    ],
    "explanation": "A gateway provides a secure bridge for supported on-premises sources to the Power BI service."
  },
  {
    "id": "gov-032",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway",
    "type": "single",
    "question": "A team maintaining a published departmental model asks: when a published model needs to refresh from an on-premises data source, what may be required?",
    "options": [
      "A configured on-premises data gateway and valid credentials",
      "A report bookmark",
      "A new DAX measure for every table",
      "A mobile layout"
    ],
    "answer": [
      0
    ],
    "explanation": "A gateway provides a secure bridge for supported on-premises sources to the Power BI service."
  },
  {
    "id": "gov-033",
    "domain": "Manage and secure Power BI",
    "topic": "Refresh schedule",
    "type": "single",
    "question": "While working with a governed enterprise dataset, a scheduled refresh fails after a database password changes. What should the owner verify?",
    "options": [
      "Stored credentials and connection settings, then review refresh history",
      "Only the chart title",
      "The report page order",
      "The semantic model display folders"
    ],
    "answer": [
      0
    ],
    "explanation": "Credential changes can break refresh; review data source settings, gateway mapping, and refresh history."
  },
  {
    "id": "gov-034",
    "domain": "Manage and secure Power BI",
    "topic": "Refresh schedule",
    "type": "single",
    "question": "Scenario: A self-service analytics solution. A scheduled refresh fails after a database password changes. What should the owner verify?",
    "options": [
      "Only the chart title",
      "The report page order",
      "The semantic model display folders",
      "Stored credentials and connection settings, then review refresh history"
    ],
    "answer": [
      3
    ],
    "explanation": "Credential changes can break refresh; review data source settings, gateway mapping, and refresh history."
  },
  {
    "id": "gov-035",
    "domain": "Manage and secure Power BI",
    "topic": "Refresh schedule",
    "type": "single",
    "question": "For a published departmental model, which action is most appropriate? A scheduled refresh fails after a database password changes. What should the owner verify?",
    "options": [
      "The report page order",
      "The semantic model display folders",
      "Stored credentials and connection settings, then review refresh history",
      "Only the chart title"
    ],
    "answer": [
      2
    ],
    "explanation": "Credential changes can break refresh; review data source settings, gateway mapping, and refresh history."
  },
  {
    "id": "gov-036",
    "domain": "Manage and secure Power BI",
    "topic": "Refresh schedule",
    "type": "single",
    "question": "A team maintaining a shared executive report asks: a scheduled refresh fails after a database password changes. What should the owner verify?",
    "options": [
      "The semantic model display folders",
      "Stored credentials and connection settings, then review refresh history",
      "Only the chart title",
      "The report page order"
    ],
    "answer": [
      1
    ],
    "explanation": "Credential changes can break refresh; review data source settings, gateway mapping, and refresh history."
  },
  {
    "id": "gov-037",
    "domain": "Manage and secure Power BI",
    "topic": "Build permission",
    "type": "single",
    "question": "While working with a self-service analytics solution, what does Build permission generally allow a user to do with a shared semantic model?",
    "options": [
      "Edit every report in every workspace",
      "Create new content based on that semantic model, subject to other permissions",
      "Become a tenant administrator",
      "Change the source database schema automatically"
    ],
    "answer": [
      1
    ],
    "explanation": "Build enables downstream content creation from a semantic model; it does not grant broad workspace administration."
  },
  {
    "id": "gov-038",
    "domain": "Manage and secure Power BI",
    "topic": "Build permission",
    "type": "single",
    "question": "Scenario: A published departmental model. What does Build permission generally allow a user to do with a shared semantic model?",
    "options": [
      "Create new content based on that semantic model, subject to other permissions",
      "Become a tenant administrator",
      "Change the source database schema automatically",
      "Edit every report in every workspace"
    ],
    "answer": [
      0
    ],
    "explanation": "Build enables downstream content creation from a semantic model; it does not grant broad workspace administration."
  },
  {
    "id": "gov-039",
    "domain": "Manage and secure Power BI",
    "topic": "Build permission",
    "type": "single",
    "question": "For a shared executive report, which action is most appropriate? What does Build permission generally allow a user to do with a shared semantic model?",
    "options": [
      "Become a tenant administrator",
      "Change the source database schema automatically",
      "Edit every report in every workspace",
      "Create new content based on that semantic model, subject to other permissions"
    ],
    "answer": [
      3
    ],
    "explanation": "Build enables downstream content creation from a semantic model; it does not grant broad workspace administration."
  },
  {
    "id": "gov-040",
    "domain": "Manage and secure Power BI",
    "topic": "Build permission",
    "type": "single",
    "question": "A team maintaining a production workspace asks: what does Build permission generally allow a user to do with a shared semantic model?",
    "options": [
      "Change the source database schema automatically",
      "Edit every report in every workspace",
      "Create new content based on that semantic model, subject to other permissions",
      "Become a tenant administrator"
    ],
    "answer": [
      2
    ],
    "explanation": "Build enables downstream content creation from a semantic model; it does not grant broad workspace administration."
  },
  {
    "id": "gov-041",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity labels",
    "type": "single",
    "question": "While working with a published departmental model, what is the purpose of sensitivity labels in supported Power BI and Microsoft Purview workflows?",
    "options": [
      "Replace RLS in every case",
      "Fix query folding",
      "Classify content and support protection/governance policies",
      "Change DAX evaluation order"
    ],
    "answer": [
      2
    ],
    "explanation": "Sensitivity labels classify content and may integrate with protection and governance controls depending on configuration."
  },
  {
    "id": "gov-042",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity labels",
    "type": "single",
    "question": "Scenario: A shared executive report. What is the purpose of sensitivity labels in supported Power BI and Microsoft Purview workflows?",
    "options": [
      "Fix query folding",
      "Classify content and support protection/governance policies",
      "Change DAX evaluation order",
      "Replace RLS in every case"
    ],
    "answer": [
      1
    ],
    "explanation": "Sensitivity labels classify content and may integrate with protection and governance controls depending on configuration."
  },
  {
    "id": "gov-043",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity labels",
    "type": "single",
    "question": "For a production workspace, which action is most appropriate? What is the purpose of sensitivity labels in supported Power BI and Microsoft Purview workflows?",
    "options": [
      "Classify content and support protection/governance policies",
      "Change DAX evaluation order",
      "Replace RLS in every case",
      "Fix query folding"
    ],
    "answer": [
      0
    ],
    "explanation": "Sensitivity labels classify content and may integrate with protection and governance controls depending on configuration."
  },
  {
    "id": "gov-044",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity labels",
    "type": "single",
    "question": "A team maintaining a governed enterprise dataset asks: what is the purpose of sensitivity labels in supported Power BI and Microsoft Purview workflows?",
    "options": [
      "Change DAX evaluation order",
      "Replace RLS in every case",
      "Fix query folding",
      "Classify content and support protection/governance policies"
    ],
    "answer": [
      3
    ],
    "explanation": "Sensitivity labels classify content and may integrate with protection and governance controls depending on configuration."
  },
  {
    "id": "gov-045",
    "domain": "Manage and secure Power BI",
    "topic": "Least privilege",
    "type": "single",
    "question": "While working with a shared executive report, which security principle should guide access assignments?",
    "options": [
      "Give all users Admin access",
      "Share credentials to simplify support",
      "Disable audit controls",
      "Grant only the access needed for the user's responsibilities"
    ],
    "answer": [
      3
    ],
    "explanation": "Least privilege reduces the impact of accidental or unauthorized access."
  },
  {
    "id": "gov-046",
    "domain": "Manage and secure Power BI",
    "topic": "Least privilege",
    "type": "single",
    "question": "Scenario: A production workspace. Which security principle should guide access assignments?",
    "options": [
      "Share credentials to simplify support",
      "Disable audit controls",
      "Grant only the access needed for the user's responsibilities",
      "Give all users Admin access"
    ],
    "answer": [
      2
    ],
    "explanation": "Least privilege reduces the impact of accidental or unauthorized access."
  },
  {
    "id": "gov-047",
    "domain": "Manage and secure Power BI",
    "topic": "Least privilege",
    "type": "single",
    "question": "For a governed enterprise dataset, which action is most appropriate? Which security principle should guide access assignments?",
    "options": [
      "Disable audit controls",
      "Grant only the access needed for the user's responsibilities",
      "Give all users Admin access",
      "Share credentials to simplify support"
    ],
    "answer": [
      1
    ],
    "explanation": "Least privilege reduces the impact of accidental or unauthorized access."
  },
  {
    "id": "gov-048",
    "domain": "Manage and secure Power BI",
    "topic": "Least privilege",
    "type": "single",
    "question": "A team maintaining a self-service analytics solution asks: which security principle should guide access assignments?",
    "options": [
      "Grant only the access needed for the user's responsibilities",
      "Give all users Admin access",
      "Share credentials to simplify support",
      "Disable audit controls"
    ],
    "answer": [
      0
    ],
    "explanation": "Least privilege reduces the impact of accidental or unauthorized access."
  },
  {
    "id": "gov-049",
    "domain": "Manage and secure Power BI",
    "topic": "Share vs app",
    "type": "single",
    "question": "While working with a production workspace, what should you consider before sharing an individual report directly?",
    "options": [
      "Whether the recipient needs only consumption or also broader model/workspace permissions",
      "Whether the report has a gradient background",
      "The number of hidden columns only",
      "Whether every user can edit the source database"
    ],
    "answer": [
      0
    ],
    "explanation": "Choose the distribution method and permissions based on audience, consumption needs, and governance requirements."
  },
  {
    "id": "gov-050",
    "domain": "Manage and secure Power BI",
    "topic": "Share vs app",
    "type": "single",
    "question": "Scenario: A governed enterprise dataset. What should you consider before sharing an individual report directly?",
    "options": [
      "Whether the report has a gradient background",
      "The number of hidden columns only",
      "Whether every user can edit the source database",
      "Whether the recipient needs only consumption or also broader model/workspace permissions"
    ],
    "answer": [
      3
    ],
    "explanation": "Choose the distribution method and permissions based on audience, consumption needs, and governance requirements."
  },
  {
    "id": "gov-051",
    "domain": "Manage and secure Power BI",
    "topic": "Share vs app",
    "type": "single",
    "question": "For a self-service analytics solution, which action is most appropriate? What should you consider before sharing an individual report directly?",
    "options": [
      "The number of hidden columns only",
      "Whether every user can edit the source database",
      "Whether the recipient needs only consumption or also broader model/workspace permissions",
      "Whether the report has a gradient background"
    ],
    "answer": [
      2
    ],
    "explanation": "Choose the distribution method and permissions based on audience, consumption needs, and governance requirements."
  },
  {
    "id": "gov-052",
    "domain": "Manage and secure Power BI",
    "topic": "Share vs app",
    "type": "single",
    "question": "A team maintaining a published departmental model asks: what should you consider before sharing an individual report directly?",
    "options": [
      "Whether every user can edit the source database",
      "Whether the recipient needs only consumption or also broader model/workspace permissions",
      "Whether the report has a gradient background",
      "The number of hidden columns only"
    ],
    "answer": [
      1
    ],
    "explanation": "Choose the distribution method and permissions based on audience, consumption needs, and governance requirements."
  },
  {
    "id": "gov-053",
    "domain": "Manage and secure Power BI",
    "topic": "Audit and lineage",
    "type": "single",
    "question": "While working with a governed enterprise dataset, why review lineage and usage/audit information where available?",
    "options": [
      "Replace all documentation",
      "Understand dependencies, usage, and governance impact before changing or retiring content",
      "Automatically correct every data-quality issue",
      "Generate DAX without a model"
    ],
    "answer": [
      1
    ],
    "explanation": "Lineage and usage information help assess downstream impact and support responsible lifecycle management."
  },
  {
    "id": "gov-054",
    "domain": "Manage and secure Power BI",
    "topic": "Audit and lineage",
    "type": "single",
    "question": "Scenario: A self-service analytics solution. Why review lineage and usage/audit information where available?",
    "options": [
      "Understand dependencies, usage, and governance impact before changing or retiring content",
      "Automatically correct every data-quality issue",
      "Generate DAX without a model",
      "Replace all documentation"
    ],
    "answer": [
      0
    ],
    "explanation": "Lineage and usage information help assess downstream impact and support responsible lifecycle management."
  },
  {
    "id": "gov-055",
    "domain": "Manage and secure Power BI",
    "topic": "Audit and lineage",
    "type": "single",
    "question": "For a published departmental model, which action is most appropriate? Why review lineage and usage/audit information where available?",
    "options": [
      "Automatically correct every data-quality issue",
      "Generate DAX without a model",
      "Replace all documentation",
      "Understand dependencies, usage, and governance impact before changing or retiring content"
    ],
    "answer": [
      3
    ],
    "explanation": "Lineage and usage information help assess downstream impact and support responsible lifecycle management."
  },
  {
    "id": "gov-056",
    "domain": "Manage and secure Power BI",
    "topic": "Audit and lineage",
    "type": "single",
    "question": "A team maintaining a shared executive report asks: why review lineage and usage/audit information where available?",
    "options": [
      "Generate DAX without a model",
      "Replace all documentation",
      "Understand dependencies, usage, and governance impact before changing or retiring content",
      "Automatically correct every data-quality issue"
    ],
    "answer": [
      2
    ],
    "explanation": "Lineage and usage information help assess downstream impact and support responsible lifecycle management."
  },
  {
    "id": "gov-057",
    "domain": "Manage and secure Power BI",
    "topic": "Deployment pipelines",
    "type": "single",
    "question": "While working with a self-service analytics solution, what is the purpose of deployment pipelines where available?",
    "options": [
      "Replace source control for all code",
      "Automatically rewrite business definitions",
      "Promote content through development, test, and production stages with controlled deployment",
      "Make every user an owner"
    ],
    "answer": [
      2
    ],
    "explanation": "Deployment pipelines support controlled lifecycle promotion across stages, subject to capacity and licensing requirements."
  },
  {
    "id": "gov-058",
    "domain": "Manage and secure Power BI",
    "topic": "Deployment pipelines",
    "type": "single",
    "question": "Scenario: A published departmental model. What is the purpose of deployment pipelines where available?",
    "options": [
      "Automatically rewrite business definitions",
      "Promote content through development, test, and production stages with controlled deployment",
      "Make every user an owner",
      "Replace source control for all code"
    ],
    "answer": [
      1
    ],
    "explanation": "Deployment pipelines support controlled lifecycle promotion across stages, subject to capacity and licensing requirements."
  },
  {
    "id": "gov-059",
    "domain": "Manage and secure Power BI",
    "topic": "Deployment pipelines",
    "type": "single",
    "question": "For a shared executive report, which action is most appropriate? What is the purpose of deployment pipelines where available?",
    "options": [
      "Promote content through development, test, and production stages with controlled deployment",
      "Make every user an owner",
      "Replace source control for all code",
      "Automatically rewrite business definitions"
    ],
    "answer": [
      0
    ],
    "explanation": "Deployment pipelines support controlled lifecycle promotion across stages, subject to capacity and licensing requirements."
  },
  {
    "id": "gov-060",
    "domain": "Manage and secure Power BI",
    "topic": "Deployment pipelines",
    "type": "single",
    "question": "A team maintaining a production workspace asks: what is the purpose of deployment pipelines where available?",
    "options": [
      "Make every user an owner",
      "Replace source control for all code",
      "Automatically rewrite business definitions",
      "Promote content through development, test, and production stages with controlled deployment"
    ],
    "answer": [
      3
    ],
    "explanation": "Deployment pipelines support controlled lifecycle promotion across stages, subject to capacity and licensing requirements."
  },
  {
    "id": "gov-061",
    "domain": "Manage and secure Power BI",
    "topic": "Endorsement",
    "type": "single",
    "question": "While working with a published departmental model, what is the purpose of certifying or promoting a semantic model where governance features are enabled?",
    "options": [
      "Guarantee every number is correct forever",
      "Change a measure's data type",
      "Grant tenant admin rights",
      "Signal that content is recommended or has met an organization's quality criteria"
    ],
    "answer": [
      3
    ],
    "explanation": "Endorsement communicates organizational confidence or recommendation; it does not guarantee correctness without ongoing governance."
  },
  {
    "id": "gov-062",
    "domain": "Manage and secure Power BI",
    "topic": "Endorsement",
    "type": "single",
    "question": "Scenario: A shared executive report. What is the purpose of certifying or promoting a semantic model where governance features are enabled?",
    "options": [
      "Change a measure's data type",
      "Grant tenant admin rights",
      "Signal that content is recommended or has met an organization's quality criteria",
      "Guarantee every number is correct forever"
    ],
    "answer": [
      2
    ],
    "explanation": "Endorsement communicates organizational confidence or recommendation; it does not guarantee correctness without ongoing governance."
  },
  {
    "id": "gov-063",
    "domain": "Manage and secure Power BI",
    "topic": "Endorsement",
    "type": "single",
    "question": "For a production workspace, which action is most appropriate? What is the purpose of certifying or promoting a semantic model where governance features are enabled?",
    "options": [
      "Grant tenant admin rights",
      "Signal that content is recommended or has met an organization's quality criteria",
      "Guarantee every number is correct forever",
      "Change a measure's data type"
    ],
    "answer": [
      1
    ],
    "explanation": "Endorsement communicates organizational confidence or recommendation; it does not guarantee correctness without ongoing governance."
  },
  {
    "id": "gov-064",
    "domain": "Manage and secure Power BI",
    "topic": "Endorsement",
    "type": "single",
    "question": "A team maintaining a governed enterprise dataset asks: what is the purpose of certifying or promoting a semantic model where governance features are enabled?",
    "options": [
      "Signal that content is recommended or has met an organization's quality criteria",
      "Guarantee every number is correct forever",
      "Change a measure's data type",
      "Grant tenant admin rights"
    ],
    "answer": [
      0
    ],
    "explanation": "Endorsement communicates organizational confidence or recommendation; it does not guarantee correctness without ongoing governance."
  },
  {
    "id": "gov-065",
    "domain": "Manage and secure Power BI",
    "topic": "Tenant settings",
    "type": "single",
    "question": "While working with a shared executive report, who should typically manage tenant-wide Power BI settings?",
    "options": [
      "Authorized tenant administrators following organizational governance",
      "Every report viewer",
      "Any external guest by default",
      "Only a report bookmark owner"
    ],
    "answer": [
      0
    ],
    "explanation": "Tenant settings affect organizational behavior and should be managed by authorized administrators."
  },
  {
    "id": "gov-066",
    "domain": "Manage and secure Power BI",
    "topic": "Tenant settings",
    "type": "single",
    "question": "Scenario: A production workspace. Who should typically manage tenant-wide Power BI settings?",
    "options": [
      "Every report viewer",
      "Any external guest by default",
      "Only a report bookmark owner",
      "Authorized tenant administrators following organizational governance"
    ],
    "answer": [
      3
    ],
    "explanation": "Tenant settings affect organizational behavior and should be managed by authorized administrators."
  },
  {
    "id": "gov-067",
    "domain": "Manage and secure Power BI",
    "topic": "Tenant settings",
    "type": "single",
    "question": "For a governed enterprise dataset, which action is most appropriate? Who should typically manage tenant-wide Power BI settings?",
    "options": [
      "Any external guest by default",
      "Only a report bookmark owner",
      "Authorized tenant administrators following organizational governance",
      "Every report viewer"
    ],
    "answer": [
      2
    ],
    "explanation": "Tenant settings affect organizational behavior and should be managed by authorized administrators."
  },
  {
    "id": "gov-068",
    "domain": "Manage and secure Power BI",
    "topic": "Tenant settings",
    "type": "single",
    "question": "A team maintaining a self-service analytics solution asks: who should typically manage tenant-wide Power BI settings?",
    "options": [
      "Only a report bookmark owner",
      "Authorized tenant administrators following organizational governance",
      "Every report viewer",
      "Any external guest by default"
    ],
    "answer": [
      1
    ],
    "explanation": "Tenant settings affect organizational behavior and should be managed by authorized administrators."
  },
  {
    "id": "gov-069",
    "domain": "Manage and secure Power BI",
    "topic": "External sharing",
    "type": "single",
    "question": "While working with a production workspace, before enabling external sharing, what should an organization do?",
    "options": [
      "Share administrator credentials",
      "Apply tenant controls, access policies, and data classification requirements",
      "Make every workspace public",
      "Remove all RLS roles"
    ],
    "answer": [
      1
    ],
    "explanation": "External sharing should follow organizational policy, identity controls, licensing, and sensitivity requirements."
  },
  {
    "id": "gov-070",
    "domain": "Manage and secure Power BI",
    "topic": "External sharing",
    "type": "single",
    "question": "Scenario: A governed enterprise dataset. Before enabling external sharing, what should an organization do?",
    "options": [
      "Apply tenant controls, access policies, and data classification requirements",
      "Make every workspace public",
      "Remove all RLS roles",
      "Share administrator credentials"
    ],
    "answer": [
      0
    ],
    "explanation": "External sharing should follow organizational policy, identity controls, licensing, and sensitivity requirements."
  },
  {
    "id": "gov-071",
    "domain": "Manage and secure Power BI",
    "topic": "External sharing",
    "type": "single",
    "question": "For a self-service analytics solution, which action is most appropriate? Before enabling external sharing, what should an organization do?",
    "options": [
      "Make every workspace public",
      "Remove all RLS roles",
      "Share administrator credentials",
      "Apply tenant controls, access policies, and data classification requirements"
    ],
    "answer": [
      3
    ],
    "explanation": "External sharing should follow organizational policy, identity controls, licensing, and sensitivity requirements."
  },
  {
    "id": "gov-072",
    "domain": "Manage and secure Power BI",
    "topic": "External sharing",
    "type": "single",
    "question": "A team maintaining a published departmental model asks: before enabling external sharing, what should an organization do?",
    "options": [
      "Remove all RLS roles",
      "Share administrator credentials",
      "Apply tenant controls, access policies, and data classification requirements",
      "Make every workspace public"
    ],
    "answer": [
      2
    ],
    "explanation": "External sharing should follow organizational policy, identity controls, licensing, and sensitivity requirements."
  },
  {
    "id": "gov-073",
    "domain": "Manage and secure Power BI",
    "topic": "Data alerts",
    "type": "single",
    "question": "While working with a governed enterprise dataset, what is the general purpose of a data alert on a supported dashboard tile?",
    "options": [
      "Change report row-level security",
      "Create a star schema",
      "Notify a user when a tracked value meets a configured condition",
      "Refresh every dataset in the tenant"
    ],
    "answer": [
      2
    ],
    "explanation": "Alerts can notify users when supported dashboard tile values cross configured thresholds."
  },
  {
    "id": "gov-074",
    "domain": "Manage and secure Power BI",
    "topic": "Data alerts",
    "type": "single",
    "question": "Scenario: A self-service analytics solution. What is the general purpose of a data alert on a supported dashboard tile?",
    "options": [
      "Create a star schema",
      "Notify a user when a tracked value meets a configured condition",
      "Refresh every dataset in the tenant",
      "Change report row-level security"
    ],
    "answer": [
      1
    ],
    "explanation": "Alerts can notify users when supported dashboard tile values cross configured thresholds."
  },
  {
    "id": "gov-075",
    "domain": "Manage and secure Power BI",
    "topic": "Data alerts",
    "type": "single",
    "question": "For a published departmental model, which action is most appropriate? What is the general purpose of a data alert on a supported dashboard tile?",
    "options": [
      "Notify a user when a tracked value meets a configured condition",
      "Refresh every dataset in the tenant",
      "Change report row-level security",
      "Create a star schema"
    ],
    "answer": [
      0
    ],
    "explanation": "Alerts can notify users when supported dashboard tile values cross configured thresholds."
  },
  {
    "id": "gov-076",
    "domain": "Manage and secure Power BI",
    "topic": "Data alerts",
    "type": "single",
    "question": "A team maintaining a shared executive report asks: what is the general purpose of a data alert on a supported dashboard tile?",
    "options": [
      "Refresh every dataset in the tenant",
      "Change report row-level security",
      "Create a star schema",
      "Notify a user when a tracked value meets a configured condition"
    ],
    "answer": [
      3
    ],
    "explanation": "Alerts can notify users when supported dashboard tile values cross configured thresholds."
  },
  {
    "id": "gov-077",
    "domain": "Manage and secure Power BI",
    "topic": "Subscription",
    "type": "single",
    "question": "While working with a self-service analytics solution, what should be checked when configuring report subscriptions?",
    "options": [
      "Only the report's accent color",
      "The order of DAX variables",
      "The source file extension only",
      "Recipient eligibility, delivery settings, and whether the content contains appropriate data for the audience"
    ],
    "answer": [
      3
    ],
    "explanation": "Subscriptions distribute report snapshots or links; recipients and data access must be appropriate."
  },
  {
    "id": "gov-078",
    "domain": "Manage and secure Power BI",
    "topic": "Subscription",
    "type": "single",
    "question": "Scenario: A published departmental model. What should be checked when configuring report subscriptions?",
    "options": [
      "The order of DAX variables",
      "The source file extension only",
      "Recipient eligibility, delivery settings, and whether the content contains appropriate data for the audience",
      "Only the report's accent color"
    ],
    "answer": [
      2
    ],
    "explanation": "Subscriptions distribute report snapshots or links; recipients and data access must be appropriate."
  },
  {
    "id": "gov-079",
    "domain": "Manage and secure Power BI",
    "topic": "Subscription",
    "type": "single",
    "question": "For a shared executive report, which action is most appropriate? What should be checked when configuring report subscriptions?",
    "options": [
      "The source file extension only",
      "Recipient eligibility, delivery settings, and whether the content contains appropriate data for the audience",
      "Only the report's accent color",
      "The order of DAX variables"
    ],
    "answer": [
      1
    ],
    "explanation": "Subscriptions distribute report snapshots or links; recipients and data access must be appropriate."
  },
  {
    "id": "gov-080",
    "domain": "Manage and secure Power BI",
    "topic": "Subscription",
    "type": "single",
    "question": "A team maintaining a production workspace asks: what should be checked when configuring report subscriptions?",
    "options": [
      "Recipient eligibility, delivery settings, and whether the content contains appropriate data for the audience",
      "Only the report's accent color",
      "The order of DAX variables",
      "The source file extension only"
    ],
    "answer": [
      0
    ],
    "explanation": "Subscriptions distribute report snapshots or links; recipients and data access must be appropriate."
  },
  {
    "id": "gov-081",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway mapping",
    "type": "single",
    "question": "While working with a published departmental model, a refresh uses the wrong on-premises gateway connection. What should you verify?",
    "options": [
      "The semantic model's data source mapping, gateway cluster, and credentials",
      "The matrix subtotal format",
      "The bookmarks pane",
      "The DAX editor font"
    ],
    "answer": [
      0
    ],
    "explanation": "The published model must map its sources to the correct gateway data source with valid credentials."
  },
  {
    "id": "gov-082",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway mapping",
    "type": "single",
    "question": "Scenario: A shared executive report. A refresh uses the wrong on-premises gateway connection. What should you verify?",
    "options": [
      "The matrix subtotal format",
      "The bookmarks pane",
      "The DAX editor font",
      "The semantic model's data source mapping, gateway cluster, and credentials"
    ],
    "answer": [
      3
    ],
    "explanation": "The published model must map its sources to the correct gateway data source with valid credentials."
  },
  {
    "id": "gov-083",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway mapping",
    "type": "single",
    "question": "For a production workspace, which action is most appropriate? A refresh uses the wrong on-premises gateway connection. What should you verify?",
    "options": [
      "The bookmarks pane",
      "The DAX editor font",
      "The semantic model's data source mapping, gateway cluster, and credentials",
      "The matrix subtotal format"
    ],
    "answer": [
      2
    ],
    "explanation": "The published model must map its sources to the correct gateway data source with valid credentials."
  },
  {
    "id": "gov-084",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway mapping",
    "type": "single",
    "question": "A team maintaining a governed enterprise dataset asks: a refresh uses the wrong on-premises gateway connection. What should you verify?",
    "options": [
      "The DAX editor font",
      "The semantic model's data source mapping, gateway cluster, and credentials",
      "The matrix subtotal format",
      "The bookmarks pane"
    ],
    "answer": [
      1
    ],
    "explanation": "The published model must map its sources to the correct gateway data source with valid credentials."
  },
  {
    "id": "gov-085",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity and export",
    "type": "single",
    "question": "While working with a shared executive report, why should export permissions and sensitivity classification be considered together?",
    "options": [
      "Export has no governance implications",
      "Export can move data outside the report experience and may require additional protection controls",
      "Exports always inherit every security control in every format",
      "Sensitivity labels change chart sorting only"
    ],
    "answer": [
      1
    ],
    "explanation": "Export can create copies outside the report, so permissions, labels, and organizational policies matter."
  },
  {
    "id": "gov-086",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity and export",
    "type": "single",
    "question": "Scenario: A production workspace. Why should export permissions and sensitivity classification be considered together?",
    "options": [
      "Export can move data outside the report experience and may require additional protection controls",
      "Exports always inherit every security control in every format",
      "Sensitivity labels change chart sorting only",
      "Export has no governance implications"
    ],
    "answer": [
      0
    ],
    "explanation": "Export can create copies outside the report, so permissions, labels, and organizational policies matter."
  },
  {
    "id": "gov-087",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity and export",
    "type": "single",
    "question": "For a governed enterprise dataset, which action is most appropriate? Why should export permissions and sensitivity classification be considered together?",
    "options": [
      "Exports always inherit every security control in every format",
      "Sensitivity labels change chart sorting only",
      "Export has no governance implications",
      "Export can move data outside the report experience and may require additional protection controls"
    ],
    "answer": [
      3
    ],
    "explanation": "Export can create copies outside the report, so permissions, labels, and organizational policies matter."
  },
  {
    "id": "gov-088",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity and export",
    "type": "single",
    "question": "A team maintaining a self-service analytics solution asks: why should export permissions and sensitivity classification be considered together?",
    "options": [
      "Sensitivity labels change chart sorting only",
      "Export has no governance implications",
      "Export can move data outside the report experience and may require additional protection controls",
      "Exports always inherit every security control in every format"
    ],
    "answer": [
      2
    ],
    "explanation": "Export can create copies outside the report, so permissions, labels, and organizational policies matter."
  },
  {
    "id": "gov-089",
    "domain": "Manage and secure Power BI",
    "topic": "Semantic model ownership",
    "type": "single",
    "question": "While working with a production workspace, a model owner's account is disabled and scheduled refresh stops. What governance practice reduces this operational risk?",
    "options": [
      "Remove refresh monitoring",
      "Make the model anonymous",
      "Use supported ownership-transfer and operational ownership processes with managed credentials",
      "Keep the owner's password in a shared document"
    ],
    "answer": [
      2
    ],
    "explanation": "Operational ownership, credential management, and documented support processes reduce single-person dependencies."
  },
  {
    "id": "gov-090",
    "domain": "Manage and secure Power BI",
    "topic": "Semantic model ownership",
    "type": "single",
    "question": "Scenario: A governed enterprise dataset. A model owner's account is disabled and scheduled refresh stops. What governance practice reduces this operational risk?",
    "options": [
      "Make the model anonymous",
      "Use supported ownership-transfer and operational ownership processes with managed credentials",
      "Keep the owner's password in a shared document",
      "Remove refresh monitoring"
    ],
    "answer": [
      1
    ],
    "explanation": "Operational ownership, credential management, and documented support processes reduce single-person dependencies."
  },
  {
    "id": "gov-091",
    "domain": "Manage and secure Power BI",
    "topic": "Semantic model ownership",
    "type": "single",
    "question": "For a self-service analytics solution, which action is most appropriate? A model owner's account is disabled and scheduled refresh stops. What governance practice reduces this operational risk?",
    "options": [
      "Use supported ownership-transfer and operational ownership processes with managed credentials",
      "Keep the owner's password in a shared document",
      "Remove refresh monitoring",
      "Make the model anonymous"
    ],
    "answer": [
      0
    ],
    "explanation": "Operational ownership, credential management, and documented support processes reduce single-person dependencies."
  },
  {
    "id": "gov-092",
    "domain": "Manage and secure Power BI",
    "topic": "Semantic model ownership",
    "type": "single",
    "question": "A team maintaining a published departmental model asks: a model owner's account is disabled and scheduled refresh stops. What governance practice reduces this operational risk?",
    "options": [
      "Keep the owner's password in a shared document",
      "Remove refresh monitoring",
      "Make the model anonymous",
      "Use supported ownership-transfer and operational ownership processes with managed credentials"
    ],
    "answer": [
      3
    ],
    "explanation": "Operational ownership, credential management, and documented support processes reduce single-person dependencies."
  },
  {
    "id": "gov-093",
    "domain": "Manage and secure Power BI",
    "topic": "Monitor refresh",
    "type": "single",
    "question": "While working with a governed enterprise dataset, where should an owner investigate the details of a failed scheduled refresh?",
    "options": [
      "Only the report canvas",
      "The color theme JSON",
      "A slicer's selection state",
      "Refresh history and relevant gateway/source diagnostics"
    ],
    "answer": [
      3
    ],
    "explanation": "Refresh history exposes status and error details that guide troubleshooting."
  },
  {
    "id": "gov-094",
    "domain": "Manage and secure Power BI",
    "topic": "Monitor refresh",
    "type": "single",
    "question": "Scenario: A self-service analytics solution. Where should an owner investigate the details of a failed scheduled refresh?",
    "options": [
      "The color theme JSON",
      "A slicer's selection state",
      "Refresh history and relevant gateway/source diagnostics",
      "Only the report canvas"
    ],
    "answer": [
      2
    ],
    "explanation": "Refresh history exposes status and error details that guide troubleshooting."
  },
  {
    "id": "gov-095",
    "domain": "Manage and secure Power BI",
    "topic": "Monitor refresh",
    "type": "single",
    "question": "For a published departmental model, which action is most appropriate? Where should an owner investigate the details of a failed scheduled refresh?",
    "options": [
      "A slicer's selection state",
      "Refresh history and relevant gateway/source diagnostics",
      "Only the report canvas",
      "The color theme JSON"
    ],
    "answer": [
      1
    ],
    "explanation": "Refresh history exposes status and error details that guide troubleshooting."
  },
  {
    "id": "gov-096",
    "domain": "Manage and secure Power BI",
    "topic": "Monitor refresh",
    "type": "single",
    "question": "A team maintaining a shared executive report asks: where should an owner investigate the details of a failed scheduled refresh?",
    "options": [
      "Refresh history and relevant gateway/source diagnostics",
      "Only the report canvas",
      "The color theme JSON",
      "A slicer's selection state"
    ],
    "answer": [
      0
    ],
    "explanation": "Refresh history exposes status and error details that guide troubleshooting."
  },
  {
    "id": "gov-097",
    "domain": "Manage and secure Power BI",
    "topic": "Publish",
    "type": "single",
    "question": "Knowledge check (Publish) — A production workspace: select the best answer. What is the usual way to publish a report and semantic model from Power BI Desktop to the Power BI service?",
    "options": [
      "Export the DAX code into a text file",
      "Create a bookmark only",
      "Rename the Windows folder",
      "Publish and choose a destination workspace"
    ],
    "answer": [
      3
    ],
    "explanation": "Publishing sends the report and model to a selected workspace in the service."
  },
  {
    "id": "gov-098",
    "domain": "Manage and secure Power BI",
    "topic": "Workspace roles",
    "type": "single",
    "question": "Knowledge check (Workspace roles) — A governed enterprise dataset: select the best answer. Which workspace role should be assigned according to a user's required responsibilities rather than convenience?",
    "options": [
      "Contributor for every external user",
      "No role can ever be changed",
      "The least-privileged role that enables the required tasks",
      "Admin for every viewer"
    ],
    "answer": [
      2
    ],
    "explanation": "Use least privilege and assign workspace roles according to the tasks a user needs to perform."
  },
  {
    "id": "gov-099",
    "domain": "Manage and secure Power BI",
    "topic": "App audience",
    "type": "single",
    "question": "Knowledge check (App audience) — A self-service analytics solution: select the best answer. You want to distribute a curated set of reports to a broad business audience without giving everyone edit access to the workspace. What is often appropriate?",
    "options": [
      "Send the PBIX file publicly",
      "Publish a Power BI app with suitable audience settings",
      "Make every consumer a workspace admin",
      "Share the owner's password"
    ],
    "answer": [
      1
    ],
    "explanation": "Apps provide a packaged consumption experience with audience configuration distinct from workspace editing roles."
  },
  {
    "id": "gov-100",
    "domain": "Manage and secure Power BI",
    "topic": "RLS",
    "type": "single",
    "question": "Knowledge check (RLS) — A published departmental model: select the best answer. What does row-level security primarily restrict?",
    "options": [
      "Which rows a user can see in a semantic model",
      "Which colors are available in a report",
      "How many bookmarks exist",
      "Which DAX functions can be typed"
    ],
    "answer": [
      0
    ],
    "explanation": "RLS filters data rows for users assigned to roles; it does not replace workspace and sharing permissions."
  },
  {
    "id": "gov-101",
    "domain": "Manage and secure Power BI",
    "topic": "Dynamic RLS",
    "type": "single",
    "question": "Knowledge check (Dynamic RLS) — A shared executive report: select the best answer. A model must show each sales representative only their assigned region based on the signed-in identity. Which approach is commonly used?",
    "options": [
      "A static report title",
      "A bookmark per user only",
      "A hidden page with no security role",
      "Dynamic RLS using identity functions and a user-to-region mapping"
    ],
    "answer": [
      3
    ],
    "explanation": "Dynamic RLS can evaluate the user's identity and filter a mapping table or related dimension."
  },
  {
    "id": "gov-102",
    "domain": "Manage and secure Power BI",
    "topic": "Test as role",
    "type": "single",
    "question": "Knowledge check (Test as role) — A production workspace: select the best answer. Before distributing a report with RLS, what should the model author do?",
    "options": [
      "Disable all filters",
      "Only test with an administrator account",
      "Test the configured roles and verify representative user views",
      "Assume relationships always filter correctly"
    ],
    "answer": [
      2
    ],
    "explanation": "Testing roles helps reveal incorrect relationships, mappings, and unexpected access."
  },
  {
    "id": "gov-103",
    "domain": "Manage and secure Power BI",
    "topic": "RLS and workspace roles",
    "type": "single",
    "question": "Knowledge check (RLS and workspace roles) — A governed enterprise dataset: select the best answer. Why is testing RLS only as a workspace Admin insufficient?",
    "options": [
      "Admin accounts do not support Power BI",
      "Workspace Admins generally have edit-level access and are not constrained like report consumers by RLS",
      "Admins cannot open reports",
      "RLS only applies to the author"
    ],
    "answer": [
      1
    ],
    "explanation": "RLS behavior is intended for consumers with appropriate access; elevated workspace roles can bypass the consumer experience."
  },
  {
    "id": "gov-104",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway",
    "type": "single",
    "question": "Knowledge check (Gateway) — A self-service analytics solution: select the best answer. When a published model needs to refresh from an on-premises data source, what may be required?",
    "options": [
      "A configured on-premises data gateway and valid credentials",
      "A report bookmark",
      "A new DAX measure for every table",
      "A mobile layout"
    ],
    "answer": [
      0
    ],
    "explanation": "A gateway provides a secure bridge for supported on-premises sources to the Power BI service."
  },
  {
    "id": "gov-105",
    "domain": "Manage and secure Power BI",
    "topic": "Refresh schedule",
    "type": "single",
    "question": "Knowledge check (Refresh schedule) — A published departmental model: select the best answer. A scheduled refresh fails after a database password changes. What should the owner verify?",
    "options": [
      "Only the chart title",
      "The report page order",
      "The semantic model display folders",
      "Stored credentials and connection settings, then review refresh history"
    ],
    "answer": [
      3
    ],
    "explanation": "Credential changes can break refresh; review data source settings, gateway mapping, and refresh history."
  },
  {
    "id": "gov-106",
    "domain": "Manage and secure Power BI",
    "topic": "Build permission",
    "type": "single",
    "question": "Knowledge check (Build permission) — A shared executive report: select the best answer. What does Build permission generally allow a user to do with a shared semantic model?",
    "options": [
      "Change the source database schema automatically",
      "Edit every report in every workspace",
      "Create new content based on that semantic model, subject to other permissions",
      "Become a tenant administrator"
    ],
    "answer": [
      2
    ],
    "explanation": "Build enables downstream content creation from a semantic model; it does not grant broad workspace administration."
  },
  {
    "id": "gov-107",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity labels",
    "type": "single",
    "question": "Knowledge check (Sensitivity labels) — A production workspace: select the best answer. What is the purpose of sensitivity labels in supported Power BI and Microsoft Purview workflows?",
    "options": [
      "Fix query folding",
      "Classify content and support protection/governance policies",
      "Change DAX evaluation order",
      "Replace RLS in every case"
    ],
    "answer": [
      1
    ],
    "explanation": "Sensitivity labels classify content and may integrate with protection and governance controls depending on configuration."
  },
  {
    "id": "gov-108",
    "domain": "Manage and secure Power BI",
    "topic": "Least privilege",
    "type": "single",
    "question": "Knowledge check (Least privilege) — A governed enterprise dataset: select the best answer. Which security principle should guide access assignments?",
    "options": [
      "Grant only the access needed for the user's responsibilities",
      "Give all users Admin access",
      "Share credentials to simplify support",
      "Disable audit controls"
    ],
    "answer": [
      0
    ],
    "explanation": "Least privilege reduces the impact of accidental or unauthorized access."
  },
  {
    "id": "gov-109",
    "domain": "Manage and secure Power BI",
    "topic": "Share vs app",
    "type": "single",
    "question": "Knowledge check (Share vs app) — A self-service analytics solution: select the best answer. What should you consider before sharing an individual report directly?",
    "options": [
      "Whether the report has a gradient background",
      "The number of hidden columns only",
      "Whether every user can edit the source database",
      "Whether the recipient needs only consumption or also broader model/workspace permissions"
    ],
    "answer": [
      3
    ],
    "explanation": "Choose the distribution method and permissions based on audience, consumption needs, and governance requirements."
  },
  {
    "id": "gov-110",
    "domain": "Manage and secure Power BI",
    "topic": "Audit and lineage",
    "type": "single",
    "question": "Knowledge check (Audit and lineage) — A published departmental model: select the best answer. Why review lineage and usage/audit information where available?",
    "options": [
      "Generate DAX without a model",
      "Replace all documentation",
      "Understand dependencies, usage, and governance impact before changing or retiring content",
      "Automatically correct every data-quality issue"
    ],
    "answer": [
      2
    ],
    "explanation": "Lineage and usage information help assess downstream impact and support responsible lifecycle management."
  },
  {
    "id": "gov-111",
    "domain": "Manage and secure Power BI",
    "topic": "Deployment pipelines",
    "type": "single",
    "question": "Knowledge check (Deployment pipelines) — A shared executive report: select the best answer. What is the purpose of deployment pipelines where available?",
    "options": [
      "Automatically rewrite business definitions",
      "Promote content through development, test, and production stages with controlled deployment",
      "Make every user an owner",
      "Replace source control for all code"
    ],
    "answer": [
      1
    ],
    "explanation": "Deployment pipelines support controlled lifecycle promotion across stages, subject to capacity and licensing requirements."
  },
  {
    "id": "gov-112",
    "domain": "Manage and secure Power BI",
    "topic": "Endorsement",
    "type": "single",
    "question": "Knowledge check (Endorsement) — A production workspace: select the best answer. What is the purpose of certifying or promoting a semantic model where governance features are enabled?",
    "options": [
      "Signal that content is recommended or has met an organization's quality criteria",
      "Guarantee every number is correct forever",
      "Change a measure's data type",
      "Grant tenant admin rights"
    ],
    "answer": [
      0
    ],
    "explanation": "Endorsement communicates organizational confidence or recommendation; it does not guarantee correctness without ongoing governance."
  },
  {
    "id": "gov-113",
    "domain": "Manage and secure Power BI",
    "topic": "Tenant settings",
    "type": "single",
    "question": "Knowledge check (Tenant settings) — A governed enterprise dataset: select the best answer. Who should typically manage tenant-wide Power BI settings?",
    "options": [
      "Every report viewer",
      "Any external guest by default",
      "Only a report bookmark owner",
      "Authorized tenant administrators following organizational governance"
    ],
    "answer": [
      3
    ],
    "explanation": "Tenant settings affect organizational behavior and should be managed by authorized administrators."
  },
  {
    "id": "gov-114",
    "domain": "Manage and secure Power BI",
    "topic": "External sharing",
    "type": "single",
    "question": "Knowledge check (External sharing) — A self-service analytics solution: select the best answer. Before enabling external sharing, what should an organization do?",
    "options": [
      "Remove all RLS roles",
      "Share administrator credentials",
      "Apply tenant controls, access policies, and data classification requirements",
      "Make every workspace public"
    ],
    "answer": [
      2
    ],
    "explanation": "External sharing should follow organizational policy, identity controls, licensing, and sensitivity requirements."
  },
  {
    "id": "gov-115",
    "domain": "Manage and secure Power BI",
    "topic": "Data alerts",
    "type": "single",
    "question": "Knowledge check (Data alerts) — A published departmental model: select the best answer. What is the general purpose of a data alert on a supported dashboard tile?",
    "options": [
      "Create a star schema",
      "Notify a user when a tracked value meets a configured condition",
      "Refresh every dataset in the tenant",
      "Change report row-level security"
    ],
    "answer": [
      1
    ],
    "explanation": "Alerts can notify users when supported dashboard tile values cross configured thresholds."
  },
  {
    "id": "gov-116",
    "domain": "Manage and secure Power BI",
    "topic": "Subscription",
    "type": "single",
    "question": "Knowledge check (Subscription) — A shared executive report: select the best answer. What should be checked when configuring report subscriptions?",
    "options": [
      "Recipient eligibility, delivery settings, and whether the content contains appropriate data for the audience",
      "Only the report's accent color",
      "The order of DAX variables",
      "The source file extension only"
    ],
    "answer": [
      0
    ],
    "explanation": "Subscriptions distribute report snapshots or links; recipients and data access must be appropriate."
  },
  {
    "id": "gov-117",
    "domain": "Manage and secure Power BI",
    "topic": "Gateway mapping",
    "type": "single",
    "question": "Knowledge check (Gateway mapping) — A production workspace: select the best answer. A refresh uses the wrong on-premises gateway connection. What should you verify?",
    "options": [
      "The matrix subtotal format",
      "The bookmarks pane",
      "The DAX editor font",
      "The semantic model's data source mapping, gateway cluster, and credentials"
    ],
    "answer": [
      3
    ],
    "explanation": "The published model must map its sources to the correct gateway data source with valid credentials."
  },
  {
    "id": "gov-118",
    "domain": "Manage and secure Power BI",
    "topic": "Sensitivity and export",
    "type": "single",
    "question": "Knowledge check (Sensitivity and export) — A governed enterprise dataset: select the best answer. Why should export permissions and sensitivity classification be considered together?",
    "options": [
      "Sensitivity labels change chart sorting only",
      "Export has no governance implications",
      "Export can move data outside the report experience and may require additional protection controls",
      "Exports always inherit every security control in every format"
    ],
    "answer": [
      2
    ],
    "explanation": "Export can create copies outside the report, so permissions, labels, and organizational policies matter."
  },
  {
    "id": "gov-119",
    "domain": "Manage and secure Power BI",
    "topic": "Semantic model ownership",
    "type": "single",
    "question": "Knowledge check (Semantic model ownership) — A self-service analytics solution: select the best answer. A model owner's account is disabled and scheduled refresh stops. What governance practice reduces this operational risk?",
    "options": [
      "Make the model anonymous",
      "Use supported ownership-transfer and operational ownership processes with managed credentials",
      "Keep the owner's password in a shared document",
      "Remove refresh monitoring"
    ],
    "answer": [
      1
    ],
    "explanation": "Operational ownership, credential management, and documented support processes reduce single-person dependencies."
  },
  {
    "id": "gov-120",
    "domain": "Manage and secure Power BI",
    "topic": "Monitor refresh",
    "type": "single",
    "question": "Knowledge check (Monitor refresh) — A published departmental model: select the best answer. Where should an owner investigate the details of a failed scheduled refresh?",
    "options": [
      "Refresh history and relevant gateway/source diagnostics",
      "Only the report canvas",
      "The color theme JSON",
      "A slicer's selection state"
    ],
    "answer": [
      0
    ],
    "explanation": "Refresh history exposes status and error details that guide troubleshooting."
  }
];
