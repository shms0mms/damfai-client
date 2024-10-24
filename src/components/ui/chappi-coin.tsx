export function ChappiCoin({ size = 160 }: { size?: number }) {
  return (
    <>
      <img
        src={"/chappi-coin-white.png"}
        alt={"chappi-coin"}
        width={size}
        height={size}
        className="hidden dark:block"
      />
      <img
        src={"/chappi-coin-black.png"}
        alt={"chappi-coin"}
        width={size}
        height={size}
        className="dark:hidden"
      />
    </>
  )
}
