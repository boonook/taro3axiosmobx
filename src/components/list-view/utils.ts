export const minGetMore = async (self) => {
  const {onScrollToLower, hasMore} = self.props;
  const {lowerLoading} = self.state;
  if (hasMore && !lowerLoading && onScrollToLower) {
    self.setState({lowerLoading: true});
    await onScrollToLower(() => {});
    self.setState({lowerLoading: false});
  }
}
