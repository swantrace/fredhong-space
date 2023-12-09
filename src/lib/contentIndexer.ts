import * as JsSearch from "js-search";
import searchIndex from "../../content/search";
import { MarkDownItem } from "./md";

export interface SearchContent extends Partial<MarkDownItem> {
  category: string;
}

class ContentIndexer {
  private static instance: ContentIndexer;
  private searchEngine!: JsSearch.Search;

  constructor() {
    this.buildIndex();
  }

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  public search(query: string): SearchContent[] {
    return this.searchEngine.search(query) as SearchContent[];
  }

  private buildIndex() {
    this.searchEngine = new JsSearch.Search("slug");
    this.searchEngine.addIndex("title");
    this.searchEngine.addIndex("summary");
    this.searchEngine.addDocuments(searchIndex);
  }
}

export default ContentIndexer.Instance;
