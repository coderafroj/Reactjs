# useeffect
``` react
useEffect

Purpose: Side‐effects (data fetch, subscriptions, DOM) ko handle karna.

Signature: useEffect(() ⇒ { /* effect */ return () ⇒ { /* cleanup */ } }, [deps])

Deps array:

[] ⇒ sirf mount/unmount

[a,b] ⇒ jab a ya b change ho

no array ⇒ har render pe chalega

Cleanup: Return function useEffect ke andar; unmount ya deps change pe run
Common Patterns:

Data fetch: useEffect(()=>{ fetch(); }, [])

Event listener: add in effect, remove in cleanup

Pitfalls:

Missing deps ⇒ stale values ya infinite loop

Inline functions/objects in deps ⇒ unnecessary re-runs

Pro Tip: Dependencies ko “exact” rakho; eslint-plugin-react-hooks help karega

```

# useCallback
```
Purpose: Function ko memoize karke referential equality maintain karna (prevent re-creation).

Signature: const fn = useCallback(() ⇒ { /* logic */ }, [deps])

When Use:

Child component props mein function pass karte waqt

Heavy computation wrapper (par memoize better ho useMemo)
How It Helps:

Prevents unnecessary child re-renders

Stable function reference

Pitfalls:

Over-memoization ⇒ complexity bina gain

Wrong deps ⇒ stale closure

Pro Tip: Only tab use karo jab pure components ya React.memo wali jagah performance issue ho

```
## summary
```
Quick Comparison

Hook	Kaam	Return	Kab Use	Deps Impact
useEffect	Side-effects	void + cleanup fn	Data fetch, DOM, timer	Trigger re-runs
useCallback	Function memoization	Memoized function	Props, handlers	Stable fn reference

Summary

useEffect = “when & cleanup”

useCallback = “keep fn same”
```
